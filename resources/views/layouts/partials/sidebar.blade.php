<div class="pk-width-sidebar side-bar">
    @if (isset($topic))
    <div class="uk-panel uk-panel-box">
        <div class="panel-heading uk-text-center">
            <h3 class="panel-title">作者：{{ $topic->user->name }}</h3>
        </div>
        <div class="panel-body uk-text-center topic-author-box">
            @include('topics.partials.topic_author_box')
            @if(Auth::check() && $currentUser->id != $topic->user->id)
            <span class="text-white">
                <?php $isFollowing = $currentUser && $currentUser->isFollowing($topic->user->id) ?>
                <hr>
                <a data-method="post" class="uk-button uk-button-{{ !$isFollowing ? 'warning' : 'primary' }} " href="javascript:void(0);" data-url="{{ route('users.doFollow', $topic->user->id) }}" id="user-edit-button">
                   <i class="fa {{!$isFollowing ? 'fa-plus' : 'fa-minus'}}"></i> {{ !$isFollowing ? lang('Follow') : lang('Unfollow') }}
                </a>
            </span>
        @endif

        </div>
    </div>
    @endif @if (isset($userTopics) && count($userTopics))
    <div class="uk-panel uk-panel-box">
        <div class="panel-heading uk-text-center">
            <h3 class="panel-title">{{ $topic->user->name }} 的其他话题</h3>
        </div>
        <div class="panel-body">
            @include('layouts.partials.sidebar_topics', ['sidebarTopics' => $userTopics])
        </div>
    </div>
    @endif @if (isset($categoryTopics) && count($categoryTopics))
    <div class="uk-panel uk-panel-box">
        <div class="panel-heading uk-text-center">
            <h3 class="panel-title">{{ lang('Same Category Topics') }}</h3>
        </div>
        <div class="panel-body">
            @include('layouts.partials.sidebar_topics', ['sidebarTopics' => $categoryTopics])
        </div>
    </div>
    @endif @if (Route::currentRouteName() == 'topics.index')
    <div class="uk-panel uk-panel-box">
            <a href="{{ URL::route('topics.create') }}" class="uk-button uk-button-primary uk-button-large uk-width-1-1">
                <i class="fa fa-paper-plane"></i> {{ lang('New Topic') }}
            </a>
    </div>
    @endif @if(isset($banners['sidebar-resources']))
    <div class="uk-panel uk-panel-box sidebar-resources">
        <div class="panel-heading uk-text-center">
            <h3 class="panel-title">推荐资源</h3>
        </div>
        <div class="panel-body">
            <ul class="list list-group ">
                @foreach($banners['sidebar-resources'] as $banner)
                <li class="list-group-item ">
                    <a href="{{ $banner->link }}" class="" data-uk-tooltip title="{{{ $banner->title }}}">
                    <img class="media-object inline-block " src="{{ $banner->image_url }}">
                    {{{ $banner->title }}}
                </a>
                </li>
                @endforeach
            </ul>
        </div>
    </div>
    @endif @if (Route::currentRouteName() == 'topics.index')
    <div class="uk-panel uk-panel-box panel-active-users">
        <div class="panel-heading uk-text-center">
            <h3 class="panel-title">{{ lang('Active Users') }}（<a href="{{ route('hall_of_fames') }}"><i class="fa fa-star" aria-hidden="true"></i> {{ lang('Hall of Fame') }}</a>）</h3>
        </div>
        <div class="panel-body">
            @include('topics.partials.active_users')
        </div>
    </div>
    <div class="uk-panel uk-panel-box panel-hot-topics">
        <div class="panel-heading uk-text-center">
            <h3 class="panel-title">{{ lang('Hot Topics') }}</h3>
        </div>
        <div class="panel-body">
            @include('layouts.partials.sidebar_topics', ['sidebarTopics' => $hot_topics])
        </div>
    </div>
    @endif
    <div class="uk-panel uk-panel-box">
        <div class="panel-body uk-text-center sidebar-sponsor-box">
            @if(isset($banners['sidebar-sponsor'])) @foreach($banners['sidebar-sponsor'] as $banner)
            <a class="sidebar-sponsor-link" href="{{ $banner->link }}" target="_blank">
                    <img src="{{ $banner->image_url }}" class="" data-uk-tooltip title="{{ $banner->title }}" width="100%">
                </a> @endforeach @endif
        </div>
    </div>
    @if (isset($links) && count($links))
    <div class="uk-panel uk-panel-box">
        <div class="panel-heading uk-text-center">
            <h3 class="panel-title">{{ lang('Links') }}</h3>
        </div>
        <div class="panel-body uk-text-center" style="padding-top: 5px;">
            @foreach ($links as $link)
            <a href="{{ $link->link }}" target="_blank" rel="nofollow" title="{{ $link->title }}" style="padding: 3px;">
                <img src="{{ $link->cover }}" style="width:150px; margin: 3px 0;">
            </a> @endforeach
        </div>
    </div>
    @endif @if (isset($randomExcellentTopics) && count($randomExcellentTopics))
    <div class="uk-panel uk-panel-box panel-hot-topics">
        <div class="panel-heading uk-text-center">
            <h3 class="panel-title">{{ lang('Recommend Topics') }}</h3>
        </div>
        <div class="panel-body">
            @include('layouts.partials.sidebar_topics', ['sidebarTopics' => $randomExcellentTopics])
        </div>
    </div>
    @endif @if (Route::currentRouteName() == 'topics.index')
    <div class="uk-panel uk-panel-box">
        <div class="panel-heading uk-text-center">
            <h3 class="panel-title">{{ lang('App Download') }}</h3>
        </div>
        <div class="panel-body uk-text-center" style="padding: 7px;">
            <a href="https://laravel-china.org/topics/1531" target="_blank" rel="nofollow" title="">
                <img src="https://dn-phphub.qbox.me/uploads/images/201512/08/1/cziZFHqkm8.png" style="width:240px;">
            </a>
        </div>
    </div>
    @endif
</div>
<div class="uk-clearfix"></div>
