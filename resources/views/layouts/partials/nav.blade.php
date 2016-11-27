<header id="header" class="tm-header">
    <nav class="uk-navbar">
        <a class="uk-navbar-brand" href="/">MakerPlus+</a>
        <ul class="uk-navbar-nav">
            <li class="{{ (Request::is('topics*') && !Request::is('categories*') ? ' uk-active' : '') }}"><a href="{{ route('topics.index') }}">{{ lang('Topics') }}</a></li>
            <li class="{{ Request::is('categories/6') ? ' uk-active' : '' }}"><a href="{{ route('categories.show', [6, 'filter' => 'recent']) }}">教程</a></li>
            <li class="{{ Request::is('categories/4') ? ' uk-active' : '' }}"><a href="{{ route('categories.show', 4) }}">问答</a></li>
            <li class="{{ (Request::is('sites') ? ' uk-active' : '') }}"><a href="{{ route('sites.index') }}">{{ lang('Sites') }}</a></li>
            <li class="{{ (Request::is('wiki') ? ' uk-active' : '') }}"><a href="{{ route('wiki') }}">Wiki</a></li>
        </ul>
        <div class="uk-navbar-content uk-navbar-flip  uk-hidden-small">
            <div class="tm-contrast">
                <ul class="uk-navbar-nav github-login socialite-login">
                    @if (Auth::check())
                    <li>
                        <a href="{{ isset($category) ? URL::route('topics.create', ['category_id' => $category->id]) : URL::route('topics.create') }}" data-placement="bottom" class="" data-uk-tooltip title="添加主题">
                            <i class="fa fa-plus-square-o text-md"></i> 添加主题
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('notifications.index') }}" class="text-warning">
                      <span class="badge badge-{{ $currentUser->notification_count > 0 ? 'important' : 'fade' }} " data-uk-tooltip title="消息提醒" id="notification-count">
                          <i class="fa fa-bell-o"></i> {{ $currentUser->notification_count }}
                      </span>
                  </a>
                    </li>
                    <li class="uk-parent" data-uk-dropdown="" aria-haspopup="true" aria-expanded="false">
                        <a href=""><img class="uk-border-circle uk-margin-small-right" width="32" height="32" alt="{{{ $currentUser->name }}}" src="{{ $currentUser->present()->gravatar }}" />{{{ $currentUser->name }}}</a>
                        <div class="uk-dropdown uk-dropdown-navbar uk-dropdown-bottom" aria-hidden="true">
                            <ul class="uk-nav uk-nav-navbar">
                                @if (Auth::user()->can('visit_admin'))
                                <li>
                                    <a href="/admin" class="no-pjax">
                                        <i class="fa fa-tachometer text-md"></i> 管理后台
                                    </a>
                                </li>
                                @endif
                                <li>
                                    <a class="button" href="{{ route('users.show', $currentUser->id) }}" data-lang-loginout="{{ lang('Are you sure want to logout?') }}">
                                        <i class="fa fa-user text-md"></i> 个人中心
                                    </a>
                                </li>
                                <li>
                                    <a class="button" href="{{ route('users.edit', $currentUser->id) }}">
                                        <i class="fa fa-cog text-md"></i> 编辑资料
                                    </a>
                                </li>
                                <li>
                                    <a id="login-out" class="button" href="{{ URL::route('logout') }}" data-lang-loginout="{{ lang('Are you sure want to logout?') }}">
                                        <i class="fa fa-sign-out text-md"></i> {{ lang('Logout') }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    @else
                    <a href="{{ URL::route('auth.oauth', ['driver' => 'weibo']) }}" class="uk-button uk-button-danger">
                        <i class="fa fa-weibo"></i> {{ lang('Login') }}
                    </a>
                    <a href="{{ URL::route('auth.oauth', ['driver' => 'github']) }}" class="uk-button uk-button-primary">
                        <i class="fa fa-github-alt"></i> {{ lang('Login') }}
                    </a>
                    @endif
                </ul>
            </div>
        </div>
    </nav>
</header>
