// MemberContext.tsx

import React, { createContext, useState } from 'react';

interface Member {
  name: string;
  birthdate: string;
  gender: string;
}

interface MemberContextType {
  members: Member[];
  addMember: (member: Member) => void;
}

export const MemberContext = createContext<MemberContextType | undefined>(undefined);

export const MemberProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [members, setMembers] = useState<Member[]>([]);

  const addMember = (member: Member) => {
    setMembers((prevMembers) => [...prevMembers, member]);
  };

  return (
    <MemberContext.Provider value={{ members, addMember }}>
      {children}
    </MemberContext.Provider>
  );
};
