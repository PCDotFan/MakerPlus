@extends('layouts.default') 
@section('title') {{{ $topic->title }}}_@parent @stop 
@section('description') {{{ $topic->excerpt }}} @stop 
@section('content')
<div class="topics-show uk-grid pk-grid-large" data-uk-grid-margin="">
    <div class="pk-width-content uk-row-first">
        <!-- Topic Detail -->
        <div class="topic article-content uk-panel uk-panel-box">
            <div class="panel-heading">
                <section class="thought-meta">
                    <h1 class="uk-article-title topic-title">{{{ $topic->title }}}</h1> 
                    @include('topics.partials.meta')
                </section>
            </div>
            <div class="panel-body content-body entry-content uk-margin">
                @include('topics.partials.body', array('body' => $topic->body))
                <div data-lang-excellent="{{ lang('This topic has been mark as Excenllent Topic.') }}" data-lang-wiki="{{ lang('This is a Community Wiki.') }}" class="ribbon-container">
                    @include('topics.partials.ribbon')
                </div>
            </div>
            <div class="appends-container" data-lang-append="{{ lang('Append') }}">
                @foreach ($topic->appends as $index => $append)
                <div class="appends">
                    <span class="meta">{{ lang('Append') }} {{ $index }} &nbsp;·&nbsp; <abbr title="{{ $append->created_at }}" class="timeago">{{ $append->created_at }}</abbr></span>
                    <div class="sep5"></div>
                    <div class="markdown-reply append-content">
                        {!! $append->content !!}
                    </div>
                </div>
                @endforeach
            </div>
            @include('topics.partials.topic_operate', ['manage_topics' => $currentUser ? $currentUser->can("manage_topics") : false])
        </div>
        <div class="votes-container uk-panel uk-panel-box uk-margin padding-md">
            <div class="panel-body vote-box uk-text-center">
                <div class="uk-button-group">
                    <a data-ajax="post" href="javascript:void(0);" data-url="{{ route('topics.upvote', $topic->id) }}" data-uk-tooltip title="点赞相当于收藏，可以在个人页面的「赞过的话题」导航里查看" id="up-vote" class="vote uk-button-primary uk-button {{ $topic->user->payment_qrcode ?: 'btn-inverted' }}  {{ $currentUser && $topic->votes()->ByWhom(Auth::id())->WithType('upvote')->count() ? 'active' :'' }}">
                        <i class="fa fa-thumbs-up" aria-hidden="true"></i> 点赞
                    </a>
                    @if( $topic->user->payment_qrcode )
                    <div class="or"></div>
                    <button class="uk-button uk-button-danger" data-uk-modal="{target: '#payment-qrcode-modal'}" data-uk-tooltip title="如果觉得我的文章对您有用，请随意打赏。你的支持将鼓励我继续创作！<br>可以修改个人资料「支付二维码」开启打赏功能。">
                        <i class="fa fa-heart" aria-hidden="true"></i> 打赏
                    </button>
                    @endif
                </div>
                <div class="voted-users">
                    @if(count($votedUsers))
                    <div class="user-lists">
                        @foreach($votedUsers as $votedUser)
                        <a href="{{ route('users.show', $votedUser->id) }}" data-userId="{{ $votedUser->id }}">
                            <img class="radius-avatar avatar-middle" src="{{ $votedUser->present()->gravatar() }}" style="width:48px;height:48px;">
                        </a> @endforeach
                    </div>
                    @else
                    <div class="user-lists">
                    </div>
                    <div class="vote-hint">
                        成为第一个点赞的人吧 <img title=":bowtie:" alt=":bowtie:" class="emoji" src="https://dn-phphub.qbox.me/assets/images/emoji/bowtie.png" align="absmiddle"></img>
                    </div>
                    @endif
                    <a class="voted-template" href="" data-userId="" style="display:none">
                        <img class="radius-avatar avatar-middle" src="" style="width:48px;height:48px;">
                    </a>
                </div>
            </div>
        </div>
        <!-- Reply List -->
        <div class="replies uk-panel uk-panel-box list-panel replies-index">
            <div class="panel-heading">
                <h3 class="total">{{ lang('Total Reply Count') }}: <b>{{ $replies->total() }}</b> </h3>
            </div>
            <div class="panel-body">
                @if (count($replies)) @include('topics.partials.replies', ['manage_topics' => $currentUser ? $currentUser->can("manage_topics") : false])
                <div id="replies-empty-block" class="empty-block hide">{{ lang('No comments') }}~~</div>
                @else
                <ul class="list-group row"></ul>
                <div id="replies-empty-block" class="empty-block">{{ lang('No comments') }}~~</div>
                @endif
                <!-- Pager -->
                <div class="pull-right" style="padding-right:20px">
                    {!! $replies->appends(Request::except('page'))->render() !!}
                </div>
            </div>
        </div>
        <!-- Reply Box -->
        <div class="reply-box discussion-respond">
            @include('layouts.partials.errors')
            <div class="uk-margin-large-top uk-panel uk-panel-box">
                <form method="POST" action="{{ route('replies.store') }}" accept-charset="UTF-8" id="reply-form" class="uk-form uk-form-stacked">
                    {!! csrf_field() !!}
                    <input type="hidden" name="topic_id" value="{{ $topic->id }}" /> @include('topics.partials.composing_help_block')
                    <div class="uk-form-row">
                        @if ($currentUser) @if ($currentUser->verified)
                        <textarea class="form-control" rows="5" placeholder="{{ lang('Please using markdown.') }}" style="overflow:hidden" id="reply_content" name="body" cols="50"></textarea>
                        @else
                        <textarea class="form-control" disabled="disabled" rows="5" placeholder="{{ lang('You need to verify the email for commenting.') }}" name="body" cols="50"></textarea>
                        @endif @else
                        <textarea class="form-control" disabled="disabled" rows="5" placeholder="{{ lang('User Login Required for commenting.') }}" name="body" cols="50"></textarea>
                        @endif
                    </div>
                    <div class="uk-form-row reply-post-submit">
                        <button class="uk-button uk-button-primary" id="reply-create-submit" type="submit" {{ $currentUser ? '' : 'disabled'}}>{{ lang('Reply') }}</button>
                        <kbd class="help-inline" title="Or Command + Enter">Ctrl+Enter</kbd>
                    </div>
                </form>
            </div>
            <div class="box preview markdown-reply uk-panel uk-panel-box uk-margin-top" id="preview-box" style="display:none;"></div>
        </div>
    </div>
    @if( $topic->user->payment_qrcode ) @include('topics.partials.payment_qrcode_modal') @endif @include('layouts.partials.sidebar')
</div>
@include('layouts.partials.bottombanner') @stop 
@section('scripts')
<script type="text/javascript">
    $(document).ready(function()
    {
        Config.following_users =  @if($currentUser) {!!$currentUser->present()->followingUsersJson()!!} @else [] @endif;
        PHPHub.initAutocompleteAtUser();
        $('.social-share').share($config);
    });
</script>
@stop
