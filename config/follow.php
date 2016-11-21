<?php

return [

    /**
     * The class name of user model to be used.
     */
    'user_model'     => App\User::class,

    /**
     * The class name of follower model to be used.
     */
    'follower_model' => Overtrue\LaravelFollow\Models\Follower::class,

    /**
     * The class name of the blocker model to be used.
     */
    'blocker_model'  => Overtrue\LaravelFollow\Models\Blocker::class,
];