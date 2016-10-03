 @if (count($topics))
<ul class="uk-list uk-list-line discussion-list topic-list uk-grid">
    @foreach ($topics as $topic)
    <li class="uk-width-1-2 uk-article">
        <a class="reply_last_time uk-visible-large meta" href="{{route('topics.show', [$topic->id])}}">
                 {{ $topic->vote_count }} {{ lang('Up Votes') }}
                 <span> ⋅ </span>
                 {{ $topic->reply_count }} {{ lang('Replies') }}
              </a>
        <section class="discussion-avatar uk-float-left">
            <a href="{{ route('users.show', [$topic->user_id]) }}">
                    <img class="uk-border-circle uk-margin-right" width="44" height="44" alt="{{{ $topic->user->name }}}" src="{{ $topic->user->present()->gravatar }}"/>
                </a>
        </section>
        <section class="discussion-main uk-text-truncate">
            @if ($topic->order > 0 && !Input::get('filter') && Route::currentRouteName() != 'home' )
            <span class="uk-badge-label uk-badge-warning">{{ lang('Stick') }}</span> @else
            <span class="uk-badge-label uk-badge-{{ ($topic->is_excellent == 'yes' && Route::currentRouteName() != 'home') ? 'success' : 'default' }}">{{{ $topic->category->name }}}</span> @endif
            <h2 class="uk-article-title discussion-title"><a href="{{ route('topics.show', [$topic->id]) }}" title="{{{ $topic->title }}}">
                    {{{ $topic->title }}}
                </a></h2>
        </section>
    </li>
    @endforeach
</ul>
@else
<div class="empty-block">{{ lang('Dont have any data Yet') }}~~</div>
@endif
