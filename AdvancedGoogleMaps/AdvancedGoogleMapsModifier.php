<?php

namespace Statamic\Addons\AdvancedGoogleMaps;

use Statamic\Extend\Modifier;
use function GuzzleHttp\json_encode;

class AdvancedGoogleMapsModifier extends Modifier
{
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
        $styles = $value['styles'];
        $zoom = $value['zoom'];
        $width = $value['width'];
        $height = $value['height'];
        $address = $value['address'];
        return $this->view('partials.map', compact('styles', 'zoom', 'width', 'height', 'address'));
    }
}
