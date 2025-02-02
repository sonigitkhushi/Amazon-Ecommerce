<div class="row cart-item">
    <div class="col-3">
        <div class="checkout-product-img-wrapper">
            <img
                class="item-thumb img-thumbnail img-rounded"
                src="https://cdn.mos.cms.futurecdn.net/87dUue39Z64p5j23xVvrQn-1200-80.jpg"
                alt="{{ $product->original_product->name }}"
            >
            <span class="checkout-quantity">{{ $cartItem->qty }}</span>
        </div>
    </div>
    <div class="col">
        {!! apply_filters('ecommerce_cart_before_item_content', null, $cartItem) !!}

        <p class="mb-0">{{ $product->original_product->name }} @if ($product->isOutOfStock())
                <span class="stock-status-label">({!! $product->stock_status_html !!})</span>
            @endif
        </p>
        <p class="mb-0">
            <small>{{ $product->variation_attributes }}</small>
        </p>

        @include(EcommerceHelper::viewPath('includes.cart-item-options-extras'), [
            'options' => $cartItem->options,
        ])

        @if (!empty($cartItem->options['options']))
            {!! render_product_options_html($cartItem->options['options'], $product->original_price) !!}
        @endif

        {!! apply_filters('ecommerce_cart_after_item_content', null, $cartItem) !!}
    </div>
    <div class="col-auto text-end">
        <p>{{ format_price($cartItem->price) }}</p>
    </div>
</div>
