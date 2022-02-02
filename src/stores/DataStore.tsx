/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState, createContext, Dispatch, SetStateAction } from 'react';

import { API_CONFIG, DateInterface } from '../constants';

export interface RoverInterface {
  name: string;
  id: number;
  cameras: Array<{ id: number; name: string }>;
  max_sol: number;
  max_date: string;
}

interface RoverPhotosInterface {
  id: number;
  img_src: string;
}

interface DataStoreInterface {
  rovers: Array<RoverInterface>;
  roverPhotos: Array<RoverPhotosInterface> | undefined;
  totalPages: number;
  currentPage: number;
  wrongDate: boolean;
  selectedRover: RoverInterface | undefined;
  selectedCamera: string;
  selectedDate: string;
  selectedDateType: DateInterface | undefined;
  setSelectedRover: Dispatch<SetStateAction<RoverInterface | undefined>>;
  setSelectedCamera: Dispatch<SetStateAction<string>>;
  setSelectedDateType: Dispatch<SetStateAction<DateInterface | undefined>>;
  setSelectedDate: Dispatch<SetStateAction<string>>;
  setRoverPhotos: Dispatch<SetStateAction<RoverPhotosInterface[] | undefined>>;
  setTotalPages: Dispatch<SetStateAction<number>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setWrongDate: Dispatch<SetStateAction<boolean>>;
  fetchRovers: () => void;
  fetchPhotos: () => void;
}

const DataStore = createContext<DataStoreInterface>({
  rovers: [],
  roverPhotos: [],
  totalPages: 0,
  currentPage: 0,
  wrongDate: false,
  selectedRover: undefined,
  selectedCamera: '',
  selectedDate: '',
  selectedDateType: undefined,
  setSelectedRover: () => {},
  setSelectedCamera: () => {},
  setSelectedDateType: () => {},
  setSelectedDate: () => {},
  setRoverPhotos: () => {},
  setTotalPages: () => {},
  setCurrentPage: () => {},
  setWrongDate: () => {},
  fetchRovers: () => {},
  fetchPhotos: () => {},
});

export const DataProvider = ({ children }: any) => {
  const [rovers, setRovers] = useState<any[]>([]);
  const [selectedRover, setSelectedRover] = useState<RoverInterface | undefined>();
  const [selectedCamera, setSelectedCamera] = useState<string>('');
  const [selectedDateType, setSelectedDateType] = useState<DateInterface | undefined>();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [roverPhotos, setRoverPhotos] = useState<Array<RoverPhotosInterface> | undefined>();
  const [wrongDate, setWrongDate] = useState(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const fetchPhotos = async () => {
    const URL = `${API_CONFIG.NASA_MARS_API_URL}rovers/${selectedRover?.name}/photos?${
      selectedDateType && selectedDate ? `${selectedDateType.key}=${selectedDate}` : `sol=${selectedRover?.max_sol}`
    }${currentPage ? `&page=${currentPage}` : ''}${selectedCamera ? `&camera=${selectedCamera}` : ''}&api_key=${
      API_CONFIG.NASA_API_KEY
    }`;

    try {
      const response = await fetch(URL);
      const data = await response.json();

      setRoverPhotos(data.photos);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchTotalPages = async () => {
    const URL = `${API_CONFIG.NASA_MARS_API_URL}rovers/${selectedRover?.name}/photos?sol=${selectedRover?.max_sol}${
      selectedCamera ? `&camera=${selectedCamera}` : ''
    }
  &api_key=${API_CONFIG.NASA_API_KEY}`;

    try {
      const pagesResponse = await fetch(URL);
      const pagesData = await pagesResponse.json();

      setTotalPages(Math.ceil(pagesData.photos.length / 25));
      setCurrentPage(1);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchRovers = async () => {
    try {
      const response = await fetch(`${API_CONFIG.NASA_MARS_API_URL}rovers?&api_key=${API_CONFIG.NASA_API_KEY}`);
      const data = await response.json();

      setRovers(data.rovers);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setSelectedCamera('');
    setSelectedDateType(undefined);
  }, [selectedRover]);

  useEffect(() => {
    fetchTotalPages();
  }, [selectedRover, selectedCamera]);

  useEffect(() => {
    if (currentPage) {
      fetchPhotos();
    }
  }, [currentPage, selectedRover, selectedCamera]);

  useEffect(() => {
    if (roverPhotos?.length && !totalPages) {
      setTotalPages(Math.ceil(roverPhotos.length / 25));
    }

    if (!roverPhotos?.length) {
      setTotalPages(0);
    }
  }, [roverPhotos]);

  return (
    <DataStore.Provider
      value={{
        rovers,
        roverPhotos,
        totalPages,
        wrongDate,
        currentPage,
        selectedRover,
        selectedCamera,
        selectedDate,
        selectedDateType,
        setSelectedDate,
        setSelectedDateType,
        setSelectedCamera,
        setSelectedRover,
        setRoverPhotos,
        setTotalPages,
        setCurrentPage,
        setWrongDate,
        fetchRovers,
        fetchPhotos,
      }}
    >
      {children}
    </DataStore.Provider>
  );
};

export default DataStore;
