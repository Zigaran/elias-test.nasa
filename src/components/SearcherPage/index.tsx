import React, { useEffect } from 'react';

// import { API_CONFIG } from '../../constants';

import { FlexBox, FlexAlignment, FlexDirection } from '../../ui';
import { SearcherBody } from './styled';

const SearcherPage = () => {
  const fetchearDatos = async (): Promise<any> => {
    try {
      const response = await fetch(
        'https://api.nasa.gov/mars-photos/api/v1/rovers?&api_key=jrWKt2q2QARDXXJqL1nXbLefb0Uj8zjhmZDSRco3',
      );
      const rsp = await response.json();
      console.log('RESPONSE!', rsp);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchearDatos();
  }, []);

  return (
    <FlexBox
      backgroundColor="gray"
      flexDirection={FlexDirection.Row}
      alignItems={FlexAlignment.Center}
      justifyContent={FlexAlignment.Center}
      grow
    >
      <SearcherBody />
    </FlexBox>
  );
};

export default SearcherPage;
