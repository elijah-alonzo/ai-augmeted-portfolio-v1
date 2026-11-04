export interface ProfileChunk {
  title: string;
  content: string;
}

export interface ProfileData {
  personal: {
    name: string;
    title: string;
    location: string;
    contact?: {
      email?: string;
      linkedin?: string;
      github?: string;
    };
  };
  content_chunks: ProfileChunk[];
}
