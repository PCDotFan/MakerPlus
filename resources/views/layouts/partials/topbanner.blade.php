<!--<div class="uk-panel uk-panel-box">
    @if(isset($banners['website_top']))
        @foreach($banners['website_top'] as $banner)
    <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
        <div class="item">
<<<<<<< HEAD
            <a href="@if($banner->link){{$banner->link}}@else javascript:; @endif" target="{{$banner->target}}">
=======
            <a href="@if($banner->link){{$banner->link}}@else javascript:; @endif" class="no-pjax">
>>>>>>> summerblue/master
                <p class="img"><span style="background-image:url({{$banner->image_url}}?imageView2/1/w/424/h/212)"></span></p>
                <p class="caption">{{$banner->title}}</p>
            </a>
        </div>
    </div>
        @endforeach
    @endif
</div>
-->