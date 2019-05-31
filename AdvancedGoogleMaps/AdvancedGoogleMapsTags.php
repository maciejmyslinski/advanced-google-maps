<?php

namespace Statamic\Addons\AdvancedGoogleMaps;

use Statamic\Extend\Tags;

class AdvancedGoogleMapsTags extends Tags
{
    /**
     * The {{ advanced_google_maps }} tag
     *
     * @return string|array
     */
    public function index()
    {
        $api_key = $this->getConfig('google_api_key');
        $result = $this->js->tag('renderMaps') . PHP_EOL;
        $result .= '<script async defer src="https://maps.googleapis.com/maps/api/js?key=' . $api_key . '&callback=advancedGoogleMaps" type="text/javascript"></script>';
        return $result;
    }
}
