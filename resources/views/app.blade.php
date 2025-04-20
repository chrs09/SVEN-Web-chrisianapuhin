<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Pawtastic Appointments</title>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
    @viteReactRefresh
    @vite(['resources/js/app.jsx', 'resources/sass/app.scss'])
</head>
<body>
    <div id="app"></div>
</body>
</html>
