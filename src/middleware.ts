import * as mongoose from "mongoose";

import { NextRequest, NextResponse } from "next/server";

// * This Middleware Will Invoke On Every Request, If Don't Set {{Matcher-URL}}
export async function middleware(req: NextRequest) {
  const rgx = /\/api\/*/;

  // try {
  //   const connected = await mongoose.connect(
  //     "mongodb+srv://HamzaJavedShaikh:12@cluster0.blo8xq3.mongodb.net/Wahu",
  //     {
  //       useNewUrlParser: true,

  //       useUnifiedTopology: true,

  //       useFindAndModify: false,
  //     }
  //   );
  //   console.log("onnected to db");
  // } catch (error) {
  //   console.log(error);
  // }

  // return NextResponse.json({ message: "Hahaha Aagy nhi jaany dunga ;O" });
  // return NextResponse.next();
}

// *Middleware will be invoked for every route in your project, Now It Will Invoke if the path matches
export const config = {
  matcher: "/api/:path*",
};
