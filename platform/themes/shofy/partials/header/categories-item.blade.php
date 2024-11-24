@php
    $iconImage = $category->icon_image;
    $icon = $category->icon;
@endphp

@if ($iconImage || $icon)
    <span>
        @if ($iconImage)
            {{ RvMedia::image($iconImage, $category->name, attributes: ['width' => 18, 'height' => 18, 'loading' => false]) }}
        @elseif ($icon)
            {!! BaseHelper::renderIcon($icon) !!}
        @endif
    </span>
@endif

{{ $category->name }}
