import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Gallery from '../Gallery'

// Mock Supabase
vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        eq: vi.fn(() => ({
          order: vi.fn(() => Promise.resolve({
            data: [
              {
                id: '1',
                url: 'https://example.com/photo1.jpg',
                caption: 'Test Photo 1',
                display_order: 1,
                is_active: true
              },
              {
                id: '2',
                url: 'https://example.com/photo2.jpg',
                caption: 'Test Photo 2',
                display_order: 2,
                is_active: true
              }
            ]
          }))
        }))
      }))
    }))
  }
}))

// Mock useNavigate
const mockNavigate = vi.fn()
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate
  }
})

const renderGallery = () => {
  return render(
    <BrowserRouter>
      <Gallery />
    </BrowserRouter>
  )
}

describe('Gallery Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders loading state initially', () => {
    renderGallery()
    expect(screen.getByText('Loading gallery...')).toBeInTheDocument()
  })

  it('renders gallery title and back button', async () => {
    renderGallery()
    
    await waitFor(() => {
      expect(screen.getByText('Parish Photo Gallery')).toBeInTheDocument()
      expect(screen.getByText('Back to Home')).toBeInTheDocument()
    })
  })

  it('renders search input', async () => {
    renderGallery()
    
    await waitFor(() => {
      expect(screen.getByPlaceholderText('Search photos...')).toBeInTheDocument()
    })
  })

  it('displays photos in grid', async () => {
    renderGallery()
    
    await waitFor(() => {
      expect(screen.getByText('Test Photo 1')).toBeInTheDocument()
      expect(screen.getByText('Test Photo 2')).toBeInTheDocument()
    })
  })

  it('filters photos based on search term', async () => {
    renderGallery()
    
    await waitFor(() => {
      const searchInput = screen.getByPlaceholderText('Search photos...')
      fireEvent.change(searchInput, { target: { value: 'Photo 1' } })
      
      expect(screen.getByText('Test Photo 1')).toBeInTheDocument()
      expect(screen.queryByText('Test Photo 2')).not.toBeInTheDocument()
    })
  })

  it('shows no results message when search has no matches', async () => {
    renderGallery()
    
    await waitFor(() => {
      const searchInput = screen.getByPlaceholderText('Search photos...')
      fireEvent.change(searchInput, { target: { value: 'nonexistent' } })
      
      expect(screen.getByText('No photos found matching your search.')).toBeInTheDocument()
    })
  })

  it('navigates back to home when back button is clicked', async () => {
    renderGallery()
    
    await waitFor(() => {
      const backButton = screen.getByText('Back to Home')
      fireEvent.click(backButton)
      
      expect(mockNavigate).toHaveBeenCalledWith('/')
    })
  })

  it('shows clear search button when search has results', async () => {
    renderGallery()
    
    await waitFor(() => {
      const searchInput = screen.getByPlaceholderText('Search photos...')
      fireEvent.change(searchInput, { target: { value: 'Photo 1' } })
      
      const clearButton = screen.getByText('Clear Search')
      fireEvent.click(clearButton)
      
      expect(screen.getByText('Test Photo 1')).toBeInTheDocument()
      expect(screen.getByText('Test Photo 2')).toBeInTheDocument()
    })
  })
}) 