@extends('layouts.default') @section('title') {{ isset($topic) ? '编辑话题' : lang('Create New Topic') }}_@parent @stop @push('addon')
<link href="http://cdn.bootcss.com/codemirror/5.18.2/codemirror.min.css" rel="stylesheet">
<link href="http://cdn.bootcss.com/codemirror/5.18.2/addon/hint/show-hint.css" rel="stylesheet">
<script src="http://cdn.bootcss.com/uikit/2.27.1/js/components/autocomplete.min.js?v=c692"></script>
<script src="http://cdn.bootcss.com/uikit/2.27.1/js/components/notify.min.js?v=c692"></script>
<script src="http://cdn.bootcss.com/uikit/2.27.1/js/components/tooltip.min.js?v=c692"></script>
<script src="http://cdn.bootcss.com/uikit/2.27.1/js/components/sticky.min.js?v=c692"></script>
<script src="http://cdn.bootcss.com/uikit/2.27.1/js/components/sortable.min.js?v=c692"></script>
<script src="http://cdn.bootcss.com/uikit/2.27.1/js/components/pagination.min.js?v=c692"></script>
<script src="http://cdn.bootcss.com/uikit/2.27.1/js/components/form-select.min.js?v=c692"></script>
<script src="http://cdn.bootcss.com/uikit/2.27.1/js/components/htmleditor.min.js"></script>
<script src="http://cdn.bootcss.com/marked/0.3.6/marked.min.js"></script>
<script src="http://cdn.bootcss.com/codemirror/5.18.2/codemirror.min.js"></script>
@endpush @section('content')
<div class="topic_create uk-grid pk-grid-large pk-width-sidebar-large uk-form-stacked" data-uk-grid-match="" data-uk-grid-margin="" id="topic-create">
    <div class="uk-width-1-1">
        <div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin="">
            <div data-uk-margin="">
                <h2 class="uk-margin-remove">创建话题</h2>
            </div>
            <div data-uk-margin="">
                <a class="uk-button uk-margin-small-right" href="/">取消</a>
                <a href="javascript:document.getElementById('topic-create-form').submit();">
                    <button class="uk-button uk-button-primary" type="submit">发布</button>
                </a>
            </div>
        </div>
    </div>
    <div class="pk-width-content uk-grid-margin uk-row-first main-col">
        <div class="uk-alert uk-alert-large">
            {{ lang('be_nice') }}
        </div>
        @include('layouts.partials.errors') @if (isset($topic))
        <form method="POST" action="{{ route('topics.update', $topic->id) }}" accept-charset="UTF-8" id="topic-create-form" class="uk-form">
            <input name="_method" type="hidden" value="PATCH"> @else
            <form method="POST" action="{{ route('topics.store') }}" accept-charset="UTF-8" class="uk-form" id="topic-create-form">
                @endif {!! csrf_field() !!}
                <div class="uk-form-row">
                    <div class="uk-form-controls">
                        <select class="selectpicker form-control" name="category_id" id="category-select">
                            <option value="" disabled {{ count($category) !=0 ?: 'selected' }}>{{ lang('Pick a category') }}</option>
                            @foreach ($categories as $value) @if($value->id != 3 || Auth::user()->can('compose_announcement'))
                            <option value="{{ $value->id }}" {{ (count($category) !=0 && $value->id == $category->id) ? 'selected' : '' }} >{{ $value->name }}</option>
                            @endif @endforeach
                        </select>
                    </div>
                </div>
                <div class="uk-form-row">
                    <div class="uk-form-controls">
                        <input id="topic-title" class="uk-width-1-1 uk-form-large" placeholder="{{ lang('Please write down a topic') }}" name="title" type="text" value="{{ !isset($topic) ? '' : $topic->title }}">
                    </div>
                </div>
                @foreach ($categories as $cat)
                <div class="uk-form-row category-hint uk-alert category-{{ $cat->id }} {{ count($category) && $cat->id == $category->id ? 'animated rubberBand ' : ''}}" style="{{ (count($category) && $cat->id == $category->id) ? '' : 'display:none' }}">
                    {!! $cat->description !!}
                </div>
                @endforeach @include('topics.partials.composing_help_block')
                <div class="uk-form-row">
                    <div class="uk-form-controls">
                        <textarea rows="20" style="overflow:hidden" id="reply_content" placeholder="{{ lang('Please using markdown.') }}" class="uk-width-1-1" data-uk-htmleditor="{mode:'tab', markdown:true}" name="body" cols="50">{{ !isset($topic) ? '' : $topic->body_original }}</textarea>
                    </div>
                </div>
                <div class="uk-form-row status-post-submit" style="display: none">
                    <div class="uk-form-controls">
                        <input class="btn btn-primary" id="topic-create-submit" type="submit" value="{{ lang('Publish') }}">
                    </div>
                </div>
                <div class="box preview markdown-body" id="preview-box" style="display:none;"></div>
            </form>
    </div>
    <div class="pk-width-sidebar">
        <div class="uk-panel uk-form">
            <div class="uk-form-row">
                <label for="form-status" class="uk-form-label">分类目录</label>
                <div class="uk-form-controls">
                </div>
            </div>
        </div>
    </div>
</div>
@stop @section('scripts')
<script type="text/javascript">
$(document).ready(function() {
    $('#category-select').on('change', function() {
        var current_cid = $(this).val();
        $('.category-hint').hide();
        $('.category-' + current_cid).fadeIn();
    });
});
</script>
@stop
