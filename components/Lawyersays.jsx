"use client";
import React from "react";
import Image from 'next/image'



Image
const Lawyersays = () => {
  return (
   
                    <div className="bg-background  my-10 py-12">
                      <h2 className="text-center text-4xl font-bold mb-8">WHAT LAWYER SAYS</h2>
                      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                          <Image src="/judge1.jpg" alt="Portrait of Mr. Gautam Mishra, Attorney" className="mx-auto rounded-full mb-4 w-96 h-60" width={400} height={100} />
                          <h3 className="font-semibold text-lg">Mr. Gautam Mishra, Attorney</h3>
                          <p className="text-muted-foreground mt-2"> The Portal has revolutionized the way I handle my cases. The ease of filing and tracking cases online has significantly reduced my workload and allowed me to focus more on my clients. The comprehensive legal resources available have been invaluable in my research.</p>
                        </div>
                        <div className="text-center">
                          <Image src="/judge2.jpg" alt="Portrait of Mrs. Sarah K., Plaintiff" className="mx-auto rounded-full mb-4 w-96 h-60" width={400} height={100}/>
                          <h3 className="font-semibold text-lg">Mrs. Sarah K., Plaintiff</h3>
                          <p className="text-muted-foreground mt-2">I was initially overwhelmed by the legal process, but the Portal made everything so much easier. Filing my case online was straightforward, and I could track every step of the process without having to visit the courthouse. The support team was incredibly helpful whenever I had questions.</p>
                        </div>
                        <div className="text-center">
                          <Image src="/judge3.jpg" alt="Portrait of Ms. Emily R., Legal Researcher" className="mx-auto rounded-full mb-4 w-96 h-60" width={400} height={100} />
                          <h3 className="font-semibold text-lg">Ms. Emily R., Legal Researcher</h3>
                          <p className="text-muted-foreground mt-2">The search functionality and the extensive undefinedbase of legal documents on the Portal have been a game-changer for my research work. I can find relevant case laws and statutes quickly, which has greatly improved my efficiency.</p>
                        </div>
                      </div>
                    </div>
            
  )
}

export default Lawyersays
