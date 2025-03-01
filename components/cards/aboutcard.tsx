import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function AboutCard() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <Card>
        <CardHeader>
          <CardTitle>Nyusha Chat with Google Gemini Flash 2.0</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground/90 leading-normal prose">
          <p className="mb-3">
            Супер простой чат, собранный на коленке из того что было.
          </p>
          <p className="mb-3">
            Стоит - бесплатно, не самая умненькая модель, вполе себе для теста.
            Пока что только текст, для файлов надо ещё пошаманить, но и это
            надюсь получится.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
