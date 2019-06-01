<?php

namespace Statamic\Addons\AdvancedGoogleMaps;

use Statamic\Extend\Modifier;
use function GuzzleHttp\json_encode;

class AdvancedGoogleMapsModifier extends Modifier
{
    private $defaults = ['zoom' => 10, 'height' => '400px', 'width' => '100%', 'address' => '', 'styles' => ''];

    /**
     * Modify a value
     *
     * @param mixed  $value    The value to be modified
     * @param array  $params   Any parameters used in the modifier
     * @param array  $context  Contextual values
     * @return mixed
     */
    public function index($value, $params, $context)
    {
        $styles = $value['styles'] ?? $this->defaults['styles'];
        $zoom = $value['zoom'] ?? $this->defaults['zoom'];
        $width = $value['width'] ?? $this->defaults['width'];
        $height = $value['height'] ?? $this->defaults['height'];
        $address = $value['address'] ?? $this->defaults['address'];
        return $this->view('partials.map', compact('styles', 'zoom', 'width', 'height', 'address'));
    }
}
