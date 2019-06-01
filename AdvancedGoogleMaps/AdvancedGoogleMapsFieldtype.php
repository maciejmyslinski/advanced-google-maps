<?php

namespace Statamic\Addons\AdvancedGoogleMaps;

use Statamic\Extend\Fieldtype;

class AdvancedGoogleMapsFieldtype extends Fieldtype
{
    private $defaults = ['zoom' => 10, 'height' => '400px', 'width' => '100%', 'address' => '', 'styles' => ''];

    /**
     * The blank/default value
     *
     * @return array
     */
    public function blank()
    {
        return $this->defaults;
    }

    /**
     * Pre-process the data before it gets sent to the publish page
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function preProcess($data)
    {
        return $data;
    }

    /**
     * Process the data before it gets saved
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function process($data)
    {
        return $data;
    }
}
