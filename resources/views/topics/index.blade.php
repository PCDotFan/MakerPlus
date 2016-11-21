@extends('layouts.default') @section('title') {{ lang('Topic List') }} @parent @stop @section('content')
<div class="uk-grid pk-grid-large" data-uk-grid-match="" data-uk-grid-margin="">
    <div class="pk-width-content topics-index">
        <div class="uk-panel uk-panel-box">
            <div class="panel-heading uk-panel-teaser">
                <ul class="uk-tab">
                    <li data-uk-tooltip class="{{ tabViewActive('filter=default') }}" title="最后回复排序"><a {!! app(App\Models\Topic::class)->present()->topicFilter('default') !!}>活跃</a></li>
                    <li data-uk-tooltip class="{{ tabViewActive('filter=excellent') }}" title="只看加精的话题"><a {!! app(App\Models\Topic::class)->present()->topicFilter('excellent') !!}>{{ lang('Excellent') }}</a></li>
                    <li data-uk-tooltip class="{{ tabViewActive('filter=vote') }}" title="点赞数排序"><a {!! app(App\Models\Topic::class)->present()->topicFilter('vote') !!}>{{ lang('Vote') }}</a></li>
                    <li data-uk-tooltip class="{{ tabViewActive('filter=recent') }}" title="发布时间排序"><a {!! app(App\Models\Topic::class)->present()->topicFilter('recent') !!}>{{ lang('Recent') }}</a></li>
                    <li data-uk-tooltip class="{{ tabViewActive('filter=noreply') }}" title="无人问津的话题"><a {!! app(App\Models\Topic::class)->present()->topicFilter('noreply') !!}>{{ lang('Noreply') }}</a></li>
                </ul>
                <div class="clearfix"></div>
            </div>
            @if ( ! $topics->isEmpty())
            <div class="panel-body uk-panel-teaser remove-padding-horizontal">
                @include('topics.partials.topics')
            </div>
            <div class="panel-footer remove-padding-horizontal pager-footer uk-panel-teaser">
                <!-- Pager -->
                {!! $topics->appends(Request::except('page', '_pjax'))->render() !!}
            </div>
            @else
            <div class="panel-body">
                <div class="empty-block">{{ lang('Dont have any data Yet') }}~~</div>
            </div>
            @endif
        </div>
        <!-- Nodes Listing -->
        @include('nodes.partials.list')
    </div>
    @include('layouts.partials.sidebar')
</div>
@stop
