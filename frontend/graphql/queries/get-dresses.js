import { gql } from '@apollo/client';

export const GET_DRESSES = () => {
	return gql`
        query {
            dresses {
                data {
                    id
                    attributes {
                        name
                        cover { 
                            data {
                                attributes {
                                    formats
                                }
                            }
                        }
                        images { 
                            data {
                                attributes {
                                    formats
                                }
                            }
                        }
                    }
                }
            }
        }`
};