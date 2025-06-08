
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import HeroContentManager from '@/components/admin/HeroContentManager';
import MassScheduleManager from '@/components/admin/MassScheduleManager';
import AnnouncementsManager from '@/components/admin/AnnouncementsManager';
import MinistriesManager from '@/components/admin/MinistriesManager';
import SacramentsManager from '@/components/admin/SacramentsManager';
import NewsManager from '@/components/admin/NewsManager';
import GalleryManager from '@/components/admin/GalleryManager';

const Admin = () => {
  const { user, isAdmin, isLoading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && (!user || !isAdmin)) {
      navigate('/auth');
    }
  }, [user, isAdmin, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Parish Admin Panel</h1>
          <div className="flex gap-4">
            <Button onClick={() => navigate('/')} variant="outline">
              View Website
            </Button>
            <Button onClick={signOut} variant="destructive">
              Sign Out
            </Button>
          </div>
        </div>

        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="mass">Mass</TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="ministries">Ministries</TabsTrigger>
            <TabsTrigger value="sacraments">Sacraments</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="hero">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section Management</CardTitle>
              </CardHeader>
              <CardContent>
                <HeroContentManager />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mass">
            <Card>
              <CardHeader>
                <CardTitle>Mass Schedule Management</CardTitle>
              </CardHeader>
              <CardContent>
                <MassScheduleManager />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="announcements">
            <Card>
              <CardHeader>
                <CardTitle>Announcements Management</CardTitle>
              </CardHeader>
              <CardContent>
                <AnnouncementsManager />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ministries">
            <Card>
              <CardHeader>
                <CardTitle>Ministries Management</CardTitle>
              </CardHeader>
              <CardContent>
                <MinistriesManager />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sacraments">
            <Card>
              <CardHeader>
                <CardTitle>Sacraments Management</CardTitle>
              </CardHeader>
              <CardContent>
                <SacramentsManager />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="news">
            <Card>
              <CardHeader>
                <CardTitle>News Management</CardTitle>
              </CardHeader>
              <CardContent>
                <NewsManager />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery">
            <Card>
              <CardHeader>
                <CardTitle>Photo Gallery Management</CardTitle>
              </CardHeader>
              <CardContent>
                <GalleryManager />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
