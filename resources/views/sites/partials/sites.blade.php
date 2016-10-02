
@if(count($filterd_sites))
<div class="panel panel-default">

    <div class="panel-heading">
        {!! $heading_title !!}
    </div>

    <div class="panel-body row">
        @foreach($filterd_sites as $site)
            <div class="col-md-2 site">
              <a class="" target="_blank" href="{{ $site->present()->linkWithUTMSource() }}" data-uk-tooltip title="{{ $site->description }}">
                <img class="favicon" src="{{ $site->present()->icon() }}">
                {{ $site->title }}
              </a>
            </div>
        @endforeach
    </div>

</div>
@endif