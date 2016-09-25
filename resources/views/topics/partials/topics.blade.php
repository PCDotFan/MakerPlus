

@if (count($topics))

<ul class="discussion-list uk-panel-teaser uk-list uk-list-line">
    @foreach ($topics as $topic)

         <li class="uk-article tm-container-small">

             <a class="reply_last_time hidden-xs" href="{{route('topics.show', [$topic->id])}}">
                 @if ($topic->reply_count > 0 && count($topic->lastReplyUser))
                 <img class="user_small_avatar avatar-circle" src="{{ $topic->lastReplyUser->present()->gravatar }}">
                 @else
                 <img class="user_small_avatar avatar-circle" src="{{ $topic->user->present()->gravatar }}">
                 @endif

                 <span class="timeago">{{ $topic->updated_at }}</span>
              </a>

            <section class="discussion-avatar uk-float-left">
                <a href="{{ route('users.show', [$topic->user_id]) }}">
                    <img class="uk-border-circle uk-margin-right" width="44" height="44" alt="{{{ $topic->user->name }}}" src="{{ $topic->user->present()->gravatar }}"/>
                </a>
            </section>

            <div class="reply_count_area hidden-xs" >
                <div class="count_of_votes" title="投票数">
                  {{ $topic->vote_count }}
              </div>
                <div class="count_set">
                    <span class="count_of_replies" title="回复数">
                      {{ $topic->reply_count }}
                    </span>
                    <span class="count_seperator">/</span>
                    <span class="count_of_visits" title="查看数">
                      {{ $topic->view_count }}
                    </span>
                </div>
            </div>


                @if ($topic->order > 0 && !Input::get('filter') && Route::currentRouteName() != 'home' )
                    <span class="uk-badge-label uk-badge-warning">{{ lang('Stick') }}</span>
                @else
                    <span class="uk-badge-label uk-badge-{{ ($topic->is_excellent == 'yes' && Route::currentRouteName() != 'home') ? 'success' : 'default' }}">{{{ $topic->category->name }}}</span>
                @endif
                <section class="discussion-main">
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
