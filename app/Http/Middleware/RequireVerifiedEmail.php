<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class RequireVerifiedEmail
{
    public function handle($request, Closure $next)
    {
        // 暂时关闭 Email 认证
        /*
        if (Auth::check() && !Auth::user()->verified) {
            return redirect(route('email-verification-required'));
        }
        */
        return $next($request);
    }
}
