// ===========================
// Common Types
// ===========================

export type ID = string | number;

export interface Timestamps {
  createdAt: string;
  updatedAt: string;
}

// ===========================
// User Types
// ===========================

export interface User {
  id: ID;
  username: string;
  email: string;
  avatar?: string;
  role?: 'user' | 'admin' | 'moderator';
  createdAt?: string;
}

// ===========================
// Map Types
// ===========================

export type PointOfInterestType = 'shop' | 'flowtrail' | 'bikepark' | 'trail' | 'viewpoint';

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface PointOfInterest extends Coordinates, Timestamps {
  id: ID;
  key?: number; // Legacy support
  art: PointOfInterestType;
  name: string;
  website?: string;
  description?: string;
  rating?: number;
  difficulty?: 'easy' | 'medium' | 'hard' | 'expert';
  images?: string[];
  userId?: ID;
  verified?: boolean;
}

export interface MapViewport {
  latitude: number;
  longitude: number;
  zoom: number;
  bearing?: number;
  pitch?: number;
}

// ===========================
// API Response Types
// ===========================

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

// ===========================
// Form Types
// ===========================

export interface FormErrors {
  [key: string]: string | undefined;
}

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

// ===========================
// Dashboard Types
// ===========================

export type LayoutType = 'layout-1' | 'layout-2' | 'layout-3';
export type Direction = 'ltr' | 'rtl';
export type ColorTheme =
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink';

export interface PaletteSettings {
  background: string;
  logo: string;
  leftSidebar: string;
  rightSidebar: string;
  navbar: string;
  topNavigation: string;
}

export interface LeftSidebarSettings {
  showButtonText: boolean;
  showSectionTitle: boolean;
  showLogo: boolean;
  showCard: boolean;
  isCollapsed?: boolean;
}

export interface DashboardState {
  name: string;
  description: string;
  url: string;
  layout: LayoutType;
  direction: Direction;
  collapsed: boolean;
  toggleRightSidebar: boolean;
  colors: ColorTheme[];
  palettes: PaletteSettings;
  leftSidebar: LeftSidebarSettings;
}

// ===========================
// Notification Types
// ===========================

export interface Notification {
  id: ID;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  link?: string;
}

// ===========================
// Filter & Search Types
// ===========================

export interface SearchFilters {
  query?: string;
  type?: PointOfInterestType[];
  difficulty?: string[];
  rating?: number;
  verified?: boolean;
  bounds?: {
    north: number;
    south: number;
    east: number;
    west: number;
  };
}

export interface SortOption {
  field: string;
  order: 'asc' | 'desc';
}
