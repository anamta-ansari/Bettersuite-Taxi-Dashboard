"use client";

import { useEffect, useState, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// @ts-ignore
import HeatmapOverlay from "leaflet-heatmap";

export default function HeatmapPage() {
  const mapRef = useRef<L.Map | null>(null);
  const heatmapLayerRef = useRef<any>(null);
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [useAltGradient, setUseAltGradient] = useState(false);

  // Original and alternative gradient
  const originalGradient = { 0.1: "blue", 0.3: "lime", 0.6: "orange", 1: "red" };
  const altGradient = { 0.1: "purple", 0.3: "pink", 0.6: "yellow", 1: "green" };

  // Sample data
  const points = [
    { lat: 24.8607, lng: 67.0011, count: 5 },
    { lat: 24.8700, lng: 67.0100, count: 8 },
    { lat: 24.8500, lng: 67.0200, count: 3 },
    { lat: 24.8800, lng: 67.0300, count: 6 },
  ];

  const createHeatmapLayer = (gradient: any) => {
    const cfg = {
      radius: 0.007,
      maxOpacity: 0.8,
      scaleRadius: true,
      useLocalExtrema: false,
      latField: "lat",
      lngField: "lng",
      valueField: "count",
      gradient,
    };
    const layer = new HeatmapOverlay(cfg);
    layer.setData({ max: 10, data: points });
    return layer;
  };

  useEffect(() => {
    const map = L.map("heatmap").setView([24.8607, 67.0011], 12);
    mapRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    // Initialize with original gradient
    const heatmapLayer = createHeatmapLayer(originalGradient);
    heatmapLayer.addTo(map);
    heatmapLayerRef.current = heatmapLayer;
  }, []);

  const handleToggleHeatmap = () => {
    if (!mapRef.current || !heatmapLayerRef.current) return;
    if (showHeatmap) {
      mapRef.current.removeLayer(heatmapLayerRef.current);
    } else {
      mapRef.current.addLayer(heatmapLayerRef.current);
    }
    setShowHeatmap(!showHeatmap);
  };

  const handleChangeGradient = () => {
    if (!mapRef.current || !heatmapLayerRef.current) return;

    // Remove current layer
    mapRef.current.removeLayer(heatmapLayerRef.current);

    // Create new layer with new gradient
    const newGradient = useAltGradient ? originalGradient : altGradient;
    const newLayer = createHeatmapLayer(newGradient);

    // Add new layer to map
    newLayer.addTo(mapRef.current);
    heatmapLayerRef.current = newLayer;

    // Toggle gradient state
    setUseAltGradient(!useAltGradient);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-semibold mb-2">Heat Map</h1>
        <p className="text-gray-600 mb-4">
          This heatmap represents ride request data. Areas with higher ride
          requests appear heated (red/orange).
        </p>

        <div className="flex gap-3 mb-4">
          <button
            onClick={handleToggleHeatmap}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {showHeatmap ? "Hide Heatmap" : "Show Heatmap"}
          </button>
          <button
            onClick={handleChangeGradient}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            Change Gradient
          </button>
        </div>

        <div
          id="heatmap"
          className="w-full h-[400px] rounded-lg border shadow-sm"
        />
      </div>
    </div>
  );
}
