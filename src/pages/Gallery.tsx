
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';

interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
  display_order: number;
  is_active: boolean;
}

const Gallery = () => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [filteredPhotos, setFilteredPhotos] = useState<GalleryPhoto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPhotos();
  }, []);

  useEffect(() => {
    const filtered = photos.filter(photo =>
      photo.caption.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPhotos(filtered);
  }, [photos, searchTerm]);

  const fetchPhotos = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('gallery_photos')
      .select('*')
      .eq('is_active', true)
      .order('display_order');
    
    if (data) {
      setPhotos(data);
      setFilteredPhotos(data);
    }
    setIsLoading(false);
  };

  const openLightbox = (photo: GalleryPhoto) => {
    setSelectedPhoto(photo);
    setLightboxIndex(filteredPhotos.findIndex(p => p.id === photo.id));
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    setLightboxIndex(0);
  };

  const nextPhoto = () => {
    if (lightboxIndex < filteredPhotos.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
      setSelectedPhoto(filteredPhotos[lightboxIndex + 1]);
    }
  };

  const prevPhoto = () => {
    if (lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
      setSelectedPhoto(filteredPhotos[lightboxIndex - 1]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedPhoto) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, lightboxIndex]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center justify-center h-64">
              <div className="text-lg text-gray-600">Loading gallery...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
            <div className="flex items-center">
              <Button
                variant="outline"
                onClick={() => navigate('/')}
                className="mr-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent">
                Parish Photo Gallery
              </h1>
            </div>
            
            {/* Search Bar */}
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4"
              />
            </div>
          </div>

          {/* Results Count */}
          {searchTerm && (
            <div className="mb-6 text-gray-600">
              Found {filteredPhotos.length} photo{filteredPhotos.length !== 1 ? 's' : ''} for "{searchTerm}"
            </div>
          )}

          {/* Gallery Grid */}
          {filteredPhotos.length === 0 ? (
            <div className="text-center text-gray-600 py-12">
              <p className="text-lg mb-2">
                {searchTerm ? 'No photos found matching your search.' : 'No photos available in the gallery yet.'}
              </p>
              {searchTerm && (
                <Button
                  variant="outline"
                  onClick={() => setSearchTerm('')}
                  className="mt-4"
                >
                  Clear Search
                </Button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
              {filteredPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  onClick={() => openLightbox(photo)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <p className="text-gray-700 font-medium text-center text-sm sm:text-base line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white rounded-full p-2">
                        <Search className="w-4 h-4 text-gray-700" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {lightboxIndex > 0 && (
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}

            {lightboxIndex < filteredPhotos.length - 1 && (
              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}

            {/* Image */}
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.caption}
              className="max-w-full max-h-full object-contain"
            />

            {/* Caption */}
            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <p className="text-lg font-medium bg-black bg-opacity-50 rounded-lg px-4 py-2">
                {selectedPhoto.caption}
              </p>
            </div>

            {/* Counter */}
            <div className="absolute top-4 left-4 text-white bg-black bg-opacity-50 rounded-lg px-3 py-1">
              {lightboxIndex + 1} / {filteredPhotos.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
