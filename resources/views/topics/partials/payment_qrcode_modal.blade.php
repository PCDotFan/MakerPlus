<div id="payment-qrcode-modal" class="uk-modal">
    <div class="uk-modal-dialog">
        <a class="uk-modal-close uk-close"></a>
        <div class="uk-modal-header">
            <h4 class="modal-title text-center" id="exampleModalLabel">
            <img src="{{ $topic->user->present()->gravatar }}" style="width:65px; height:65px;" class="radius-avatar" />
        </h4>
        </div>

        <p class="text-md">
                如果觉得我的文章对您有用，请随意打赏。你的支持将鼓励我继续创作！
            </p>
            <img class="payment-qrcode" src="{{ $topic->user->payment_qrcode }}" alt="" style="width:320px;height:320px"/>
            <hr>
            <p style="color: #898989;">
                请使用微信扫描二维码。 <a href="https://laravel-china.org/topics/2487" target="_blank" style="color: #898989;text-decoration: underline;">如何开启打赏？</a>
            </p>
    </div>
</div>


