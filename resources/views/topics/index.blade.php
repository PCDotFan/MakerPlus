@extends('layouts.default') @section('title') {{ lang('Topic List') }} @parent @stop @section('content')
<div class="uk-grid pk-grid-large" data-uk-grid-match="" data-uk-grid-margin="">
    <div class="pk-width-content topics-index">
        <div class="uk-panel uk-panel-box">
            <div class="panel-heading uk-panel-teaser">
                <ul class="uk-tab" data-uk-tab="">
                    <li class="uk-active"><a href="#">Active</a></li>
                    <li><a href="https://phphub.org/topics?filter=default" class="active">活跃</a></li>
                    <li><a href="https://phphub.org/topics?filter=excellent">精华</a></li>
                    <li><a href="https://phphub.org/topics?filter=recent">最近</a></li>
                    <li><a href="https://phphub.org/topics?filter=noreply">零回复</a></li>
                </ul>
                <div class="clearfix"></div>
            </div>
            @if ( ! $topics->isEmpty())
            <div class="panel-body uk-panel-teaser remove-padding-horizontal">
                @include('topics.partials.topics')
            </div>
            <div class="panel-footer uk-text-right remove-padding-horizontal pager-footer">
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
