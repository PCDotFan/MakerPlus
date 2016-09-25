@extends('layouts.default') @section('title') {{{ $user->name }}} {{ lang('Basic Info') }}_@parent @stop @section('content')
<div class="uk-grid pk-grid-large user-show" data-uk-grid-margin="">
    @include('users.partials.basicinfo')
    <div class="pk-width-content">
        @if ($user->introduction)
        <div class="box text-center">{{{ $user->introduction }}}</div>
        @endif @if ($user->is_banned == 'yes')
        <div class="text-center alert alert-info"><b>{{ lang('This user is banned!') }}</b></div>
        @endif
        <div class="uk-panel uk-panel-box">
            <div class="panel-heading uk-panel-teaser">
                <ul class="uk-tab" data-uk-tab="">
                    <li><a href="{{ route('users.topics', $user->id) }}" class="{{ navViewActive('users.topics') }}"><i class="text-md fa fa-list-ul"></i> Ta 发布的话题</a></li>
                    <li><a href="{{ route('users.replies', $user->id) }}" class="{{ navViewActive('users.replies') }}"><i class="text-md fa fa-comment"></i> Ta 发表的回复
                    </a></li>
                    <li><a href="{{ route('users.following', $user->id) }}" class="{{ navViewActive('users.following') }}"><i class="text-md fa fa-eye"></i> Ta 关注的用户
                    </a></li>
                    <li><a href="{{ route('users.votes', $user->id) }}" class="{{ navViewActive('users.votes') }}"><i class="text-md fa fa-thumbs-up"></i> Ta 赞过的话题
                    </a></li>
                </ul>
                <div class="clearfix"></div>
            </div>
            @if ( ! $topics->isEmpty())
            <div class="panel-body uk-panel-teaser remove-padding-horizontal">
                @include('topics.partials.topics')
            </div>
            <div class="panel-footer uk-text-right remove-padding-horizontal pager-footer">
                <!-- Pager -->
                {!! $topics->appends(Request::except('page', '_pjax'))->render() !!}
            </div>
            @else
            <div class="panel-body">
                <div class="empty-block">{{ lang('Dont have any data Yet') }}~~</div>
            </div>
            @endif
        </div>
        <div class="uk-panel uk-panel-box">
            <div class="panel-heading">
                <h3 class="panel-title uk-text-center"> {{ lang('Recent Topics') }} </h3>
            </div>
            <div class="panel-body">
                @if (count($topics)) @include('users.partials.topics') @else
                <div class="empty-block">{{ lang('Dont have any data Yet') }}~~</div>
                @endif
            </div>
        </div>
        <div class="uk-panel uk-panel-box">
            <div class="panel-heading">
                <h3 class="panel-title uk-text-center"> {{ lang('Recent Replies') }} </h3>
            </div>
            <div class="panel-body">
                @if (count($replies)) @include('users.partials.replies') @else
                <div class="empty-block">{{ lang('Dont have any comment yet') }}~~</div>
                @endif
            </div>
        </div>
    </div>
</div>
@stop
