
export interface CarouselSlide {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  alt?: string;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export enum PopupType {
  Success = 'success',
  Error = 'error'
}

export interface PopupProps {
    type: PopupType;
    title: string;
    message: string;
    show: boolean;
    onClose: () => void;
}
