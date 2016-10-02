@extends('layouts.default')

@section('content')

<div class="uk-panel uk-panel-box">
  <div class="uk-grid uk-grid-medium" style="width: 480px; margin:0px auto; text-align: left;">
    <div class="uk-width-2-5">
      <img src="https://twemoji.b0.upaiyun.com/2/svg/1f381.svg" style="width: 55px;">
    </div>
    <div class="uk-width-3-5">
      <div style="line-height: 200%; text-align: center;">
        <div style="font-size: 15px">
        MakerPlus - 代码已开源至 <a href="https://github.com/pcdotfan/MakerPlus" target="_blank">GitHub.</a>
        </div>
        <div>
          <code style="padding: 4px 10px;">git@github.com:PCDotFan/makerPlus.git</code>
        </div>
      </div>
    </div>
  </div>
</div>

@include('layouts.partials.topbanner')

<div class="uk-margin uk-panel uk-panel-box panel list-panel home-topic-list">
  <div class="panel-heading uk-panel-teaser">
    <h3 class="panel-title uk-text-center">
      {{ lang('Excellent Topics') }} &nbsp;
      <a href="{{ route('feed') }}" style="color: #E5974E; font-size: 14px;" target="_blank">
         <i class="fa fa-rss"></i>
      </a>
    </h3>

  </div>

  <div class="panel-body uk-panel-teaser">
	@include('pages.partials.topics')
  </div>

  <div class="panel-footer uk-panel-teaser uk-text-right">

  	<a href="topics?filter=excellent" class="more-excellent-topic-link">
  		{{ lang('More Excellent Topics') }} <i class="fa fa-arrow-right" aria-hidden="true"></i>
  	</a>
  </div>
</div>

@stop
