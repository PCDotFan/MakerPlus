<ul class="uk-comment-list">
    @foreach ($replies as $index => $reply) @if($index+1 == count($replies))
    <a name="last-reply" class="anchor" href="#last-reply" aria-hidden="true"></a>
    @endif
    <li @if($reply->vote_count >= 2) style="margin-top: 0px; background-color: #fffce9" @else style="margin-top: 0px;" @endif >
        <article class="uk-comment">
            <section class="comment-left">
                <a href="{{ route('users.show', [$reply->user_id]) }}">
        <img class="uk-comment-avatar radius-avatar" alt="{{{ $reply->user->name }}}" src="{{ $reply->user->present()->gravatar }}"  width="60" height="60" "/>
      </a>
            </section>
            <section class="comment-right">
                <span class="comment-meta">
                    <a href="{{ route('users.show', [$reply->user_id]) }}" title="{{{ $reply->user->name }}}" class="uk-link">
                    <h3 class="uk-comment-title author">{{{ $reply->user->name }}}</h3>
                </a> 
                @if ($reply->user->present()->isAdmin())
                    <span class="uk-badge-label uk-badge-success mod-label">Moderator</span> @endif @if($reply->user->introduction)
                    <span class="introduction">
                        {{{ $reply->user->introduction }}}
                    </span> 
                @endif
                </span>
                <span class="comment-operate">

          @if ($currentUser && $reply->user_id != $currentUser->id)
          <a class="comment-vote" data-ajax="post" id="reply-up-vote-{{ $reply->id }}" href="javascript:void(0);" data-url="{{ route('replies.vote', $reply->id) }}" title="{{ lang('Vote Up') }}">
             <i class="fa fa-thumbs-o-up" style="font-size:14px;"></i> <span class="vote-count">{{ $reply->vote_count ?: '' }}</span>
                </a>
                <span> ⋅  </span> @endif @if ($currentUser && ($manage_topics || $currentUser->id == $reply->user_id) )
                <a id="reply-delete-{{ $reply->id }}" data-ajax="delete" href="javascript:void(0);" data-url="{{route('replies.destroy', [$reply->id])}}" title="{{lang('Delete')}}">
                    <i class="fa fa-trash-o"></i>
                </a>
                <span> ⋅  </span> @endif
                <a class="fa fa-reply" href="javascript:void(0)" onclick="replyOne('{{{$reply->user->name}}}');" title="回复 {{{$reply->user->name}}}"></a>
                </span>
                <p class="uk-comment-meta">
                    <a name="reply{{ $topic->present()->replyFloorFromIndex($index) }}" class="anchor" href="#reply{{ $topic->present()->replyFloorFromIndex($index) }}" aria-hidden="true">#{{ $topic->present()->replyFloorFromIndex($index) }}</a>
                    <span> ⋅  </span>
                    <abbr class="timeago" title="{{ $reply->created_at }}">{{ $reply->created_at }}</abbr>
                    @if ($reply->source && in_array($reply->source, ['iOS', 'Android'])) ⋅ via
                    <a href="https://laravel-china.org/topics/1531" target="_blank" class="" data-uk-tooltip title="来自手机客户端">
                   <i class="text-md fa fa-{{ $reply->source == 'iOS' ? 'apple' : 'android' }}" aria-hidden="true"></i> {{ $reply->source == 'iOS' ? 'iOS 客户端' : '安卓客户端' }}
                </a> @endif
                </p>
                <div class="uk-comment-body">
                    {!! $reply->body !!}
                </div>
            </section>
        </article>
    </li>
    @endforeach
</ul>
