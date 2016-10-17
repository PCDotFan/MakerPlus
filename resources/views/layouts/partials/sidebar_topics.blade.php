<ul class="uk-list">
    @foreach ($sidebarTopics as $sidebarTopic)
        @if ($sidebarTopic != null)
	        <li>
	            <a href="{{ route('topics.show', $sidebarTopic->id) }}" class="" data-uk-tooltip title="{{{ $sidebarTopic->title }}}">
	                {{{ $sidebarTopic->title }}}
	            </a>
	        </li>
        @endif
    @endforeach
</ul>