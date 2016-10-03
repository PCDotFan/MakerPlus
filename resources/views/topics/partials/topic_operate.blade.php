<div class="panel-footer uk-panel-teaser operate">
    <p class="social-share uk-margin-bottom-remove"></p>
    <p class="uk-text-right uk-margin-bottom-remove @if ($manage_topics) uk-display-inline @endif">
        @if ($currentUser && $manage_topics )
        <a data-ajax="post" id="topic-recomend-button" href="javascript:void(0);" data-url="{{ route('topics.recommend', [$topic->id]) }}" class="admin uk-button-success uk-button {{ $topic->is_excellent == 'yes' ? 'active' : ''}}" data-uk-tooltip title="推荐主题，加精的帖子会出现在首页">
            <i class="fa fa-trophy"></i> 加精
        </a>
            @if ($topic->order >= 0)
            <a data-ajax="post" id="topic-pin-button" href="javascript:void(0);" data-url="{{ route('topics.pin', [$topic->id]) }}" class="admin uk-button uk-button-warning {{ $topic->order > 0 ? 'active' : '' }}" data-uk-tooltip title="帖子置顶，会在列表页置顶">
                <i class="fa fa-thumb-tack"></i> 置顶
            </a>
            @endif 
            @if ($topic->order<=0 ) 
                <a data-ajax="post" id="topic-sink-button" href="javascript:void(0);" data-url="{{ route('topics.sink', [$topic->id]) }}" class="admin uk-button {{ $topic->order < 0 ? 'active' : '' }}" data-uk-tooltip title="沉贴，帖子将会被降低排序优先级">
                <i class="fa fa-anchor"></i> 沉贴
                </a>
            @endif
            <a data-method="delete" id="topic-delete-button" href="javascript:void(0);" data-url="{{ route('topics.destroy', [$topic->id]) }}" data-uk-tooltip title="{{ lang('Delete') }}" class="admin uk-button uk-button-danger">
                <i class="fa fa-trash-o"></i> 删除
            </a>
        @endif 
        @if ( $currentUser && ($manage_topics || $currentUser->id == $topic->user_id) )
            <a id="topic-append-button" data-uk-modal="{target:'#append-modal'}" class="uk-button-primary uk-button">
                <i class="fa fa-plus"></i> 帖子附言
            </a>
            <a id="topic-edit-button" href="{{ route('topics.edit', [$topic->id]) }}" data-uk-tooltip title="{{ lang('Edit') }}" class="uk-button">
                <i class="fa fa-pencil-square-o"></i> 编辑帖子
            </a>
        @endif
    </p>
</div>
<div class="uk-modal" id="append-modal" tabindex="-1">
    <div class="uk-modal-dialog">
        <div class="modal-content">
            <button type="button" class="uk-modal-close uk-close"></button>
            <div class="uk-modal-header">
                <h4>{{ lang('Append Content') }}</h4>
            </div>
            <form class="uk-form" method="POST" action="{{route('topics.append', $topic->id)}}" accept-charset="UTF-8">
                {!! csrf_field() !!}
                <div class="modal-body">
                    <div class="uk-alert uk-alert-warning">
                        {{ lang('append_notice') }}
                    </div>
                    <div class="uk-form-row">
                        <textarea rows="20" placeholder="{{ lang('Please using markdown.') }}" class="uk-width-1-1" data-uk-htmleditor="{markdown:true}" name="body" cols="50" rows="10"></textarea>
                    </div>
                </div>
                <div class="uk-modal-footer">
                    <p class="uk-text-right">
                        <button type="submit" class="uk-button uk-button-primary">{{ lang('Submit') }}</button>
                    </p>
                </div>
            </form>
        </div>
    </div>
</div>
