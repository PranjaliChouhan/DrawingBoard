{/*import {DrawingInfo, IPaint, IPath} from '@shopify/react-native-skia';
import create, {State} from 'zustand';
import utils from '../drawing/utils';

export type CurrentPath = {
  path: IPath;
  paint: IPaint;
  color?: string;
};

interface DrawingStore extends State {
  /*
   * Array of completed paths for redrawing
   
  completedPaths: CurrentPath[];
  /**
   * A function to update completed paths
   
  setCompletedPaths: (completedPaths: CurrentPath[]) => void;
  /*
   * Current stroke
   
  stroke: IPaint;
  /*
   * Width of the stroke
   
  strokeWidth: number;
  /*
   * Color of the stroke
   
  color: string;
  setStrokeWidth: (strokeWidth: number) => void;
  setColor: (color: string) => void;
  setStroke: (stroke: IPaint) => void;
  canvasInfo: Partial<DrawingInfo> | null;
  setCanvasInfo: (canvasInfo: Partial<DrawingInfo>) => void;
}

const useDrawingStore = create<DrawingStore>((set, get) => ({
  completedPaths: [],
  setCompletedPaths: completedPaths => {
    set({completedPaths});
  },
  strokeWidth: 2,
  color: 'black',
  stroke: utils.getPaint(2, 'black'),
  setStrokeWidth: strokeWidth => {
    set({strokeWidth});
  },
  setColor: color => {
    set({color});
  },
  setStroke: stroke => {
    set({stroke});
  },
  canvasInfo: null,
  setCanvasInfo: canvasInfo => {
    set({canvasInfo});
  },
}));

export default useDrawingStore;*/}
import create from 'zustand';
import utils from '../drawing/utils';
import { DrawingInfo } from '@shopify/react-native-skia';

// Define the types for IPaint and IPath if they are not already defined
// Replace these with the actual types if they are different
type IPaint = any;
type IPath = any;

export type CurrentPath = {
  path: IPath;
  paint: IPaint;
  color?: string;
};

interface DrawingStore {
  completedPaths: CurrentPath[];
  setCompletedPaths: (completedPaths: CurrentPath[]) => void;
  stroke: IPaint;
  strokeWidth: number;
  color: string;
  setStrokeWidth: (strokeWidth: number) => void;
  setColor: (color: string) => void;
  setStroke: (stroke: IPaint) => void;
  canvasInfo: Partial<DrawingInfo> | null;
  setCanvasInfo: (canvasInfo: Partial<DrawingInfo>) => void;
}

const useDrawingStore = create<DrawingStore>((set) => ({
  completedPaths: [],
  setCompletedPaths: (completedPaths) => {
    set({ completedPaths });
  },
  strokeWidth: 2,
  color: 'black',
  stroke: utils.getPaint(2, 'black'),
  setStrokeWidth: (strokeWidth) => {
    set({ strokeWidth });
  },
  setColor: (color) => {
    set({ color });
  },
  setStroke: (stroke) => {
    set({ stroke });
  },
  canvasInfo: null,
  setCanvasInfo: (canvasInfo) => {
    set({ canvasInfo });
  },
}));

export default useDrawingStore;

