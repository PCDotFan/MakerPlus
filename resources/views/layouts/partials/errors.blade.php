@if( $errors->any())
    <div class="uk-alert uk-alert-danger uk-alert-large">
        <ul>
            @foreach($errors->all() as $error)
            <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
