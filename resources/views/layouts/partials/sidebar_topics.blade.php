
<ul class="uk-list">
    @foreach ($sidebarTopics as $sidebarTopic)
        <li>
            <a href="{{ route('topics.show', $sidebarTopic->id) }}" class="" data-uk-tooltip title="{{{ $sidebarTopic->title }}}">
                {{{ $sidebarTopic->title }}}
            </a>
        </li>
    @endforeach
</ul>