"use client";

import React, { FC, useState, useEffect, Provider } from "react";
import { getProviders, signIn } from "next-auth/react";

type Props = {};

type Providers = {
  id: string;
  name: string;
  type: string;
};

const AuthProviders: FC<Props> = (props) => {
  const [providers, setProviders] = useState<Providers | null>(null);

  return <div>AuthProviders</div>;
};

export default AuthProviders;
