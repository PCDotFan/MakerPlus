<header id="header" class="tm-header">
    <nav class="uk-navbar">
        <a class="uk-navbar-brand" href="#">MakerPlus+</a>
        <ul class="uk-navbar-nav">
            <li class="{{ (Request::is('topics*') && !Request::is('categories*') ? ' uk-active' : '') }}"><a href="{{ route('topics.index') }}">{{ lang('Topics') }}</a></li>
            <li class="{{ Request::is('categories/6') ? ' uk-active' : '' }}"><a href="{{ route('categories.show', [6, 'filter' => 'recent']) }}">教程</a></li>
            <li class="{{ Request::is('categories/1') ? ' uk-active' : '' }}"><a href="{{ route('categories.show', 1) }}">{{ lang('Jobs') }}</a></li>
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
                            <i class="fa fa-plus text-md"></i> 添加主题
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('notifications.index') }}" class="text-warning">
                      <span class="badge badge-{{ $currentUser->notification_count > 0 ? 'important' : 'fade' }} " data-uk-tooltip title="消息提醒" id="notification-count">
                          {{ $currentUser->notification_count }}
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
                    <a href="{{ URL::route('auth.oauth', ['driver' => 'wechat']) }}" class="uk-button uk-button-success">
                        <i class="fa fa-weixin"></i> {{ lang('Login') }}
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
<!--
<div role="navigation" class="navbar navbar-default navbar-static-top topnav">
  <div class="container">
    <div class="navbar-header hidden-xs">

      <a href="/" class="navbar-brand">
          <img src="{{ cdn('assets/images/logo3.png') }}" alt="MakerPlus" />
      </a>
    </div>
    <div id="top-navbar-collapse" class="navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="{{ (Request::is('topics*') && !Request::is('categories*') ? ' active' : '') }}"><a href="{{ route('topics.index') }}">{{ lang('Topics') }}</a></li>
        <li class="{{ Request::is('categories/6') ? ' active' : '' }}"><a href="{{ route('categories.show', [6, 'filter' => 'recent']) }}">教程</a></li>
        <li class="{{ Request::is('categories/1') ? ' active' : '' }}"><a href="{{ route('categories.show', 1) }}">{{ lang('Jobs') }}</a></li>
        <li class="{{ Request::is('categories/4') ? ' active' : '' }}"><a href="{{ route('categories.show', 4) }}">问答</a></li>
        <li class="{{ (Request::is('sites') ? ' active' : '') }}"><a href="{{ route('sites.index') }}">{{ lang('Sites') }}</a></li>
        <li class="{{ (Request::is('wiki') ? ' active' : '') }}"><a href="{{ route('wiki') }}">Wiki</a></li>
      </ul>

      <div class="navbar-right">
          <form method="GET" action="{{route('search')}}" accept-charset="UTF-8" class="navbar-form navbar-left" target="_blank">
            <div class="form-group">
            <input class="form-control search-input mac-style" placeholder="{{lang('Search')}}" name="q" type="text">
            </div>
          </form>

        <ul class="nav navbar-nav github-login" >
          @if (Auth::check())
              <li>
                  <a href="{{ isset($category) ? URL::route('topics.create', ['category_id' => $category->id]) : URL::route('topics.create') }}" data-placement="bottom" class="" data-uk-tooltip title="添加主题">
                      <i class="fa fa-plus text-md"></i>
                  </a>
              </li>

              <li>
                  <a href="{{ route('notifications.index') }}" class="text-warning" style="margin-top: -4px;">
                      <span class="badge badge-{{ $currentUser->notification_count > 0 ? 'important' : 'fade' }} " data-uk-tooltip title="消息提醒" id="notification-count">
                          {{ $currentUser->notification_count }}
                      </span>
                  </a>
              </li>

              <li>
                  <a href="#" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dLabel" >
                      <img class="avatar-topnav" alt="Summer" src="{{ $currentUser->present()->gravatar }}" />
                       {{{ $currentUser->name }}}
                       <span class="caret"></span>
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="dLabel">

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
                          <a class="button" href="{{ route('users.edit', $currentUser->id) }}" >
                              <i class="fa fa-cog text-md"></i> 编辑资料
                          </a>
                      </li>
                      <li>
                          <a id="login-out" class="button" href="{{ URL::route('logout') }}" data-lang-loginout="{{ lang('Are you sure want to logout?') }}">
                              <i class="fa fa-sign-out text-md"></i> {{ lang('Logout') }}
                          </a>
                      </li>
                  </ul>
              </li>

          @else
              <a href="{{ URL::route('auth.oauth', ['driver' => 'wechat']) }}" class="btn btn-success login-btn weichat-login-btn">
                <i class="fa fa-weixin"></i>
                {{ lang('Login') }}
              </a>

              <a href="{{ URL::route('auth.oauth', ['driver' => 'github']) }}" class="btn btn-info login-btn">
                <i class="fa fa-github-alt"></i>
                {{ lang('Login') }}
              </a>
          @endif
        </ul>
      </div>
    </div>

  </div>
</div>-->
