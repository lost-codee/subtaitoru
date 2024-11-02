import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, X, RefreshCw, Search, BarChart2 } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mocked spaced repetition intervals
const SRS_INTERVALS: Record<number, number> = {
  0: 4,
  1: 8,
  2: 24,
  3: 72,
  4: 168,
  5: 336,
  6: 730,
  7: 2190,
  8: 4380,
};

// Interfaces for words and stats
interface Word {
  id: number;
  word: string;
  meaning: string;
  context: string;
  confidence: number;
  srsLevel: number;
  reviewCount: number;
  dueDate?: Date;
}

interface Stats {
  totalReviews: number;
  averageConfidence: number;
  masteredCount: number;
  dailyProgress: { date: string; reviews: number }[];
}

// Mocked data for words
const MOCK_WORDS: Word[] = [
  {
    id: 1,
    word: "こんにちは",
    meaning: "Hello",
    context: "greeting",
    confidence: 1,
    srsLevel: 0,
    reviewCount: 3,
  },
  {
    id: 2,
    word: "ありがとう",
    meaning: "Thank you",
    context: "polite",
    confidence: 2,
    srsLevel: 1,
    reviewCount: 5,
  },
  // Add more words as needed
];

// Mocked stats data for chart
const MOCK_STATS: Stats = {
  totalReviews: 50,
  averageConfidence: 2.5,
  masteredCount: 10,
  dailyProgress: Array.from({ length: 30 }, (_, i) => ({
    date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString(),
    reviews: Math.floor(Math.random() * 10),
  })).reverse(),
};

// Utility function to calculate the next review date based on SRS level
const getDueDate = (level: number): Date => {
  const hours = SRS_INTERVALS[level] || 4;
  const dueDate = new Date();
  dueDate.setHours(dueDate.getHours() + hours);
  return dueDate;
};

// Review Component Props
interface ReviewCardProps {
  word: Word;
  onShowMeaning: () => void;
  showMeaning: boolean;
  onConfidenceUpdate: (level: number) => void;
}

// Review Component
const ReviewCard: React.FC<ReviewCardProps> = ({
  word,
  onShowMeaning,
  showMeaning,
  onConfidenceUpdate,
}) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle className="text-2xl text-center">Words Review</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-center space-y-4">
        <div className="text-4xl mb-4">{word.word}</div>

        {!showMeaning ? (
          <Button onClick={onShowMeaning} className="w-full mt-4">
            Show Meaning
          </Button>
        ) : (
          <>
            <div className="text-xl mt-4">{word.meaning}</div>
            <div className="text-gray-600 mt-2">Context: {word.context}</div>
            <div className="flex justify-center gap-4 mt-6">
              <Button
                onClick={() => onConfidenceUpdate(-1)}
                variant="destructive"
              >
                <X /> Hard
              </Button>
              <Button onClick={() => onConfidenceUpdate(0)} variant="outline">
                <RefreshCw /> Again
              </Button>
              <Button onClick={() => onConfidenceUpdate(1)} variant="default">
                <Check /> Easy
              </Button>
            </div>
          </>
        )}
      </div>
    </CardContent>
  </Card>
);

// Search Component Props
interface SearchCardProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  words: Word[];
}

// Search Component
const SearchCard: React.FC<SearchCardProps> = ({
  searchTerm,
  setSearchTerm,
  words,
}) => {
  const filteredWords = words.filter(
    (word) =>
      word.word.includes(searchTerm) || word.meaning.includes(searchTerm)
  );

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search /> Search Words
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          type="text"
          placeholder="Search by word or meaning..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4"
        />

        <div className="space-y-4">
          {filteredWords.map((word) => (
            <div key={word.id} className="p-4 border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xl font-bold">{word.word}</div>
                  <div>{word.meaning}</div>
                </div>
                <div className="text-sm text-gray-500">
                  Level: {word.srsLevel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Statistics Component Props
interface StatsCardProps {
  stats: Stats;
}

// Statistics Component
const StatsCard: React.FC<StatsCardProps> = ({ stats }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <BarChart2 /> Statistics
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 border rounded-lg text-center">
          <div className="text-2xl font-bold">{stats.totalReviews}</div>
          <div className="text-gray-600">Total Reviews</div>
        </div>
        <div className="p-4 border rounded-lg text-center">
          <div className="text-2xl font-bold">{stats.averageConfidence}</div>
          <div className="text-gray-600">Average Confidence</div>
        </div>
        <div className="p-4 border rounded-lg text-center">
          <div className="text-2xl font-bold">{stats.masteredCount}</div>
          <div className="text-gray-600">Words Mastered</div>
        </div>
        <div className="p-4 border rounded-lg text-center">
          <div className="text-2xl font-bold">{MOCK_WORDS.length}</div>
          <div className="text-gray-600">Total Words</div>
        </div>
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer>
          <LineChart data={stats.dailyProgress}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="reviews" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

// Main App Component
const WordReviewApp: React.FC = () => {
  const [words, setWords] = useState<Word[]>(MOCK_WORDS);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [showMeaning, setShowMeaning] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [view, setView] = useState<"review" | "search" | "stats">("review");

  const handleConfidenceUpdate = (level: number) => {
    const updatedWords = [...words];
    const currentWord = updatedWords[currentWordIndex];
    currentWord.confidence = Math.min(3, currentWord.confidence + level);
    currentWord.reviewCount += 1;
    currentWord.srsLevel = Math.max(0, currentWord.srsLevel + level);
    currentWord.dueDate = getDueDate(currentWord.srsLevel);

    setWords(updatedWords);
    setShowMeaning(false);
    setCurrentWordIndex((currentWordIndex + 1) % words.length);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex gap-2 mb-4">
        <Button
          variant={view === "review" ? "default" : "outline"}
          onClick={() => setView("review")}
        >
          Review
        </Button>
        <Button
          variant={view === "search" ? "default" : "outline"}
          onClick={() => setView("search")}
        >
          Search
        </Button>
        <Button
          variant={view === "stats" ? "default" : "outline"}
          onClick={() => setView("stats")}
        >
          Statistics
        </Button>
      </div>

      {view === "review" && (
        <ReviewCard
          word={words[currentWordIndex]}
          onShowMeaning={() => setShowMeaning(true)}
          showMeaning={showMeaning}
          onConfidenceUpdate={handleConfidenceUpdate}
        />
      )}

      {view === "search" && (
        <SearchCard
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          words={words}
        />
      )}

      {view === "stats" && <StatsCard stats={MOCK_STATS} />}
    </div>
  );
};

export default WordReviewApp;
