<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="keywords" content="{{ ENV('APP_NAME') }}">
        <meta name="description" content="{{ ENV('APP_DESC') }}">
        <meta name="base-url" content="{{ ENV('APP_URL') }}">
        <meta name="socket-url" content="{{ ENV('SOCKET_URL') }}">
        <meta name="app-name" content="{{ ENV('APP_NAME') }}">
        <meta name="token" content="{{ csrf_token() }}">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ ENV('APP_NAME') }}</title>

        <link rel="icon" href="{{ asset('/images/favicon.ico') }}" type="image/x-icon">
        <link rel="shortcut icon" href="{{ asset('/images/favicon.ico') }}" type="image/x-icon">

        <style>
            body {
                font-family: 'Poppins', sans-serif; 
            }
        
        </style>

        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

    </head>
    <body class="antialiased">
        <div id="app"></div>
        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>