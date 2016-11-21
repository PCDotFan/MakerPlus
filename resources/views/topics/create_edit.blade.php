@extends('layouts.default') @section('title') {{ isset($topic) ? '编辑话题' : lang('Create New Topic') }}_@parent @stop 

@push('extension')

@endpush 

@section('content')
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
                    <div class="uk-form-controls uk-grid uk-margin-remove">
                        <select class="selectpicker form-control uk-width-2-10 uk-form-large" name="category_id" id="category-select">
                            <option value="" disabled {{ count($category) !=0 ?: 'selected' }}>{{ lang('Pick a category') }}</option>
                            @foreach ($categories as $value) @if($value->id != 3 || Auth::user()->can('compose_announcement'))
                            <option value="{{ $value->id }}" {{ (count($category) !=0 && $value->id == $category->id) ? 'selected' : '' }} >{{ $value->name }}</option>
                            @endif @endforeach
                        </select>
                        <input id="topic-title" class="uk-width-8-10 uk-form-large" placeholder="{{ lang('Please write down a topic') }}" name="title" type="text" value="{{ !isset($topic) ? '' : $topic->title }}">
                    </div>
                </div>
                @foreach ($categories as $cat)
                <div class="uk-form-row category-hint uk-alert category-{{ $cat->id }} {{ count($category) && $cat->id == $category->id ? 'animated rubberBand ' : ''}}" style="{{ (count($category) && $cat->id == $category->id) ? '' : 'display:none' }}">
                    {!! $cat->description !!}
                </div>
                @endforeach @include('topics.partials.composing_help_block')
                <div class="uk-form-row">
                    <div class="uk-form-controls" id="mdeditor">
                    <textarea rows="20" id="reply_content" placeholder="{{ lang('Please using markdown.') }}" class="uk-width-1-1" name="body" cols="50">{{ !isset($topic) ? '' : $topic->body_original }}</textarea>
                    </div>
                </div>
                <div class="uk-form-row status-post-submit" style="display: none">
                    <div class="uk-form-controls">
                        <input id="topic-create-submit" type="submit" value="{{ lang('Publish') }}">
                    </div>
                </div>
            </form>
    </div>
    <div class="pk-width-sidebar">
        <div class="uk-panel uk-panel-box">
            <div class="panel-heading uk-text-center">
                <h3 class="panel-title">请注意以下几点</h3>
            </div>
            <div class="panel-body">
                <ul class="uk-list">
                    <li>请传播美好的事物，拒绝低俗、诋毁、谩骂等相关信息</li>
                    <li>请尽量分享技术相关的话题，谢绝发布社会, 政治等相关新闻</li>
                </ul>
            </div>
        </div>
        <div class="uk-panel uk-panel-box">
            <div class="panel-heading uk-text-center">
                <h3 class="panel-title">在高质量优秀社区的我们</h3>
            </div>
            <div class="panel-body">
                <ul class="uk-list">
                    <li>分享生活见闻, 分享知识；</li>
                    <li>接触新技术, 讨论技术解决方案；</li>
                    <li>寻找伙伴, 遇见志同道合的人；</li>
                    <li>自发线下交流；</li>
                    <li>甚至一起开始下一个神奇的项目</li>
                </ul>
                 
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
