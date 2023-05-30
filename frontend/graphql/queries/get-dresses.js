import { gql } from '@apollo/client';

export const GET_DRESSES = () => {
	return gql`
        query {
            dresses (sort: "createdAt:desc", pagination: { limit: 100 }){
                data {
                    id
                    attributes {
                        name
                        cover { 
                            data {
                                attributes {
                                    formats
                                    alternativeText
																		url
                                }
                            }
                        }
                        images { 
                            data {
                                attributes {
                                    formats
                                    alternativeText
																		url
                                }
                            }
                        }
                    }
                }
            }
        }`;
};
