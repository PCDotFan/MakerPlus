<!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <title>@section('title')MakerPlus - 严谨而开放的创客交流社区@show</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <meta name="author" content="MakerPlus" />
    <meta name="description" content="@section('description') @show" />
    <meta name="_token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="/assets/css/main.css">
    <script src="/assets/js/scripts.js"></script>
    <script>
        Config = {
            'cdnDomain': '{{ get_cdn_domain() }}',
            'user_id': {{ $currentUser ? $currentUser->id : 0 }},
            'user_avatar': {!! $currentUser ? '"'.$currentUser->present()->gravatar() . '"' : '""' !!},
            'user_link': {!! $currentUser ? '"'. route('users.show', $currentUser->id) . '"' : '""' !!},
            'routes': {
                'notificationsCount' : '{{ route('notifications.count') }}',
                'upload_image' : '{{ route('upload_image') }}'
            },
            'token': '{{ csrf_token() }}',
            'environment': '{{ app()->environment() }}',
            'following_users': []
        };
        var ShowCrxHint = '{{isset($show_crx_hint) ? $show_crx_hint : 'no'}}';
    </script>
    @yield('styles')
    <style type="text/css">.hide { display: none!important; visibility: hidden!important; }</style>
    @stack('extension')
</head>

<body id="body">
    @include('layouts.partials.nav')
    <main class="tm-main uk-block uk-block-default uk-container uk-container-center">
        @if(\Auth::check() && !\Auth::user()->verified && !Request::is('email-verification-required'))
        <div class="uk-alert uk-alert-warning">
            邮箱未激活，请前往 {{ \Auth::user()->email }} 查收激活邮件，激活后才能完整地使用社区功能，如发帖和回帖。未收到邮件？请前往 <a href="{{ route('email-verification-required') }}">重发邮件</a> 。
        </div>
        @endif @include('flash::message') @yield('content')
    </main>
    @include('layouts.partials.footer')
    
    @stack('addon') @yield('scripts') @if (App::environment() == 'production') @endif
</body>

</html>
