"""Configuration file for data paths and other settings."""

from pathlib import Path

# Base paths
BASE_DIR = Path(__file__).parent.parent
DATA_DIR = BASE_DIR / "src" / "data"
GIS_DATA_DIR = DATA_DIR / "gis"

# GeoJSON files
OBRERA_GEOJSON = GIS_DATA_DIR / "002_Obrera.geojson" 