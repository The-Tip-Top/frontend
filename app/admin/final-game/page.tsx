'use client';
import HeaderContainer from '@/components/HeaderContainer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getAllTicketsWithParticipations } from '@/lib/actions/admin.action';
import { UserWithDetails } from '@/lib/types/types';
import { cn, formatDateTime } from '@/lib/utils';
import Image from 'next/image';
import { useEffect, useRef, useState, useTransition } from 'react';
import { ClipLoader } from 'react-spinners';

const FinalGame = () => {
  const [data, setData] = useState<UserWithDetails[] | null>(null);
  const [isPending, startTransition] = useTransition();
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    startTransition(() => {
      getAllTicketsWithParticipations()
        .then((res) => {
          setData(res ?? []);
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }, [startTransition]);

  const startNumberGeneration = () => {
    intervalRef.current = setInterval(() => {
      const randomNum = data && Math.floor(Math.random() * data?.length) + 1;
      setCurrentNumber(randomNum);
    }, 100);

    setTimeout(() => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setDone(true);
    }, 5000);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header relative">
          <HeaderContainer title="Bienvenue" user={''} subtext="Bienvenue dans l'éspace grand jeux concour!" />
        </header>
        <div className="recent-gifts mb-12 relative h-[calc(100vh-200px)] w-full">
          <div className="flex h-full flex-col gap-y-4 justify-center items-center">
            {isPending ? (
              <ClipLoader className="w-30 h-30" />
            ) : (
              <Card className="mt-6 text-xl font-bol w-[50%] p-3" hidden={done}>
                <CardContent className="text-center">
                  {data !== null && (
                    <div className="mt-4">
                      Gagnant: {<span>{currentNumber !== null ? data[currentNumber]?.name : ''}</span>}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="mt-3">
                  <Button
                    variant={'default'}
                    size={'sm'}
                    onClick={startNumberGeneration}
                    className=" text-white w-full bg-[#18181B]"
                  >
                    Tirage
                  </Button>
                </CardFooter>
              </Card>
            )}
            {done && currentNumber && data !== null && <CardItem userDetails={data[currentNumber]} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalGame;

interface CardItemProps {
  userDetails: UserWithDetails;
}

const CardItem = ({ userDetails }: CardItemProps) => {
  return (
    <Card
      x-chunk="dashboard-02-chunk-2"
      key={userDetails.id}
      className={cn(
        'bg-white shadow-md rounded-lg w-[90%] sm:w-[50%] md:w-[60%] text-left transition-transform duration-300 relative',
      )}
    >
      <Image
        src={'/cadeau1.webp'}
        width={130}
        height={230}
        alt="cadeau1"
        className="rounded-t-md w-full h-[230px] object-cover"
      />
      <div className="p-2">
        <div className="flex justify-between">
          <p className="text-xl font-semibold text-gray-700 mt-4 mb-2">Nom: </p>
          <p className="text-xl font-semibold text-gray-700 mt-4 mb-2">{userDetails?.name || ''}</p>
        </div>
        <Separator className="bg-gray-300" />
        <div className="flex justify-between">
          <p className="text-md font-semibold text-gray-700 mt-4 mb-2">E-mail: </p>
          <p className="text-sm font-semibold text-gray-700 mt-4 mb-2 truncate">{userDetails?.email || ''}</p>
        </div>
        <Separator className="bg-gray-300" />
        <div className="flex justify-between">
          <p className="text-md font-semibold text-gray-700 mt-4 mb-2">Tél: </p>
          <p className="text-sm font-semibold text-gray-700 mt-4 mb-2">{userDetails?.phoneNumber || ''}</p>
        </div>
        <Separator className="bg-gray-300" />
        {userDetails.gifts?.map((g) => (
          <>
            <div className="flex justify-between">
              <p className="text-md font-semibold text-gray-700 mt-4 mb-2">Cadeau: </p>
              <p className="text-sm font-semibold text-gray-700 mt-4 mb-2">{g.description || ''}</p>
            </div>
            <Separator className="bg-gray-300" />
            <div className="flex justify-between">
              <p className="text-md font-semibold text-gray-600 mt-4 mb-2 ">Participation:</p>
              <p className="text-sm font-semibold text-gray-600 mt-4 mb-2">
                {
                  formatDateTime(
                    new Date(
                      userDetails?.participations?.find((p) => p.participationGiftId === g.giftId)?.createdAt ?? '',
                    ),
                  ).dateTime
                }
              </p>
            </div>
          </>
        ))}
      </div>
    </Card>
  );
};
