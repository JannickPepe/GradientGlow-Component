import { Glow, GlowArea } from "@/components/glow";
import PricingText from "@/components/PricingText";
import { Button } from "@/components/ui/button";
import { CardFooter, Card, CardHeader, CardTitle, CardDescription, CardContent, } from "@/components/ui/card";
import { GamepadIcon, Lock, Rocket, Server, Trophy, Users } from "lucide-react";

export default function Home() {

  return (
    <section className="lg:pt-10 pb-16">
      <PricingText />

      <GlowArea className="flex gap-10 items-center justify-center flex-col lg:flex-row mt-10">
        <Glow color="red" className="rounded-xl">
          <Card className="max-w-md group">
            <CardHeader>
              <CardTitle className="text-center text-3xl group-hover:underline">Free plan</CardTitle>
              <CardDescription className="max-w-sm text-center">
                2 Monthly free games, trials and perks for you to enjoy.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Server className="text-foreground" size={20} />
                  <span>Dedicated Low-Latency Gaming Servers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Users className="text-foreground" size={20} />
                  <span>Monthly Multiplayer Tournament Entry</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Trophy className="text-foreground" size={20} />
                  <span>Exclusive In-Game Rewards & Cosmetics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Rocket className="text-foreground" size={20} />
                  <span>Early Access to New Game Releases</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Lock className="text-foreground" size={20} />
                  <span>Ad-Free Gaming Experience</span>
                </li>{" "}
              </ul>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="w-full">Subscribe</Button>
            </CardFooter>
          </Card>
        </Glow>

        <Glow className="rounded-xl">
          {" "}
          <Card className="max-w-md group">
            <CardHeader>
              <CardTitle className="text-center text-3xl group-hover:underline">Pro plan</CardTitle>
              <CardDescription className="max-w-sm text-center">
                Everything you need to game, from{" "}
                <span className="text-primary">$20/month.</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <GamepadIcon size={20} className="text-foreground" />
                  <span>Access to 500+ Premium Games Library</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Server className="text-foreground" size={20} />
                  <span>Dedicated Low-Latency Gaming Servers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Users className="text-foreground" size={20} />
                  <span>Monthly Multiplayer Tournament Entry</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Trophy className="text-foreground" size={20} />
                  <span>Exclusive In-Game Rewards & Cosmetics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Rocket className="text-foreground" size={20} />
                  <span>Early Access to New Game Releases</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Lock className="text-foreground" size={20} />
                  <span>Ad-Free Gaming Experience</span>
                </li>{" "}
              </ul>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="w-full">Subscribe</Button>
            </CardFooter>
          </Card>
        </Glow>
      </GlowArea>
    </section>
  );
}
