'use client'

import React, { useRef, useState, useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import localFont from 'next/font/local';

const type1 = localFont({ src: '../app/fonts/FontType1.otf' });
const type2 = localFont({ src: '../app/fonts/FontType2.otf' });
const type3 = localFont({ src: '../app/fonts/FontType3.otf' });

const CHROMAKOPIA_GREEN = '#01823f';

const FontGenerator = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [word, setWord] = useState<string>('hello');
  const [textColor, setTextColor] = useState<string>('#000000');
  const [isDefaultTextColor, setIsDefaultTextColor] = useState<boolean>(false);

  const [bgColor, setBgColor] = useState<string>(CHROMAKOPIA_GREEN);
  const [isBgTransparent, setIsBgTransparent] = useState<boolean>(false);

  const [uploadedBgImage, setUploadedBgImage] = useState<HTMLImageElement | null>(null);

  const [generatedImage, setGeneratedImage] = useState<string>('');

  useEffect(() => {
    initializeCanvas();
  }, []);

  const initializeCanvas = () => {
    handleBgTransparency();
    handleTextColorDefault();
    generateImage();
  };

  const handleTextColorChange = (color: string) => {
    setTextColor(color);
    setIsDefaultTextColor(false);
  };

  const handleTextColorCheckboxChange = (checked: boolean) => {
    if (checked) {
      setTextColor(CHROMAKOPIA_GREEN);
    } else {
      setTextColor('#000000');
    }
    setIsDefaultTextColor(checked);
  };

  const handleBgTransparency = () => {
    const bgColorInput = document.getElementById('bgColorInput') as HTMLInputElement;
    if (uploadedBgImage) {
      bgColorInput.disabled = false;
    } else {
      bgColorInput.disabled = isBgTransparent;
    }
  };

  const handleTextColorDefault = () => {
    if (isDefaultTextColor) {
      setTextColor('#01823f');
    } else {
      setTextColor('#000000');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          setUploadedBgImage(img);
          generateImage();
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const generateImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const processedWord = word.trim().replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '').toUpperCase();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const fontsize2 = 100;
    const fontsize1 = fontsize2 * 2.5;
    const fontsize3 = fontsize2 * 2.5;
    const padding = 50;

    canvas.width = canvas.height = 500;

    if (uploadedBgImage && processedWord.length < 2) {
      ctx.drawImage(uploadedBgImage, 0, 0, canvas.width, canvas.height);
      if (!isBgTransparent) {
        ctx.fillStyle = bgColor;
        ctx.globalAlpha = 0.7;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      ctx.globalAlpha = 1.0;
      setGeneratedImage(canvas.toDataURL('image/png'));
      return;
    }

    const firstLetter = processedWord.charAt(0);
    const middleLetters = processedWord.slice(0, -1);
    const lastLetter = processedWord.charAt(processedWord.length - 1);

    ctx.font = `${fontsize1}px ${type1.style.fontFamily}`;
    const firstLetterWidth = ctx.measureText(firstLetter).width;

    ctx.font = `${fontsize2}px ${type2.style.fontFamily}`;
    const middleLettersWidth = ctx.measureText(middleLetters).width;

    ctx.font = `${fontsize3}px ${type3.style.fontFamily}`;
    const lastLetterWidth = ctx.measureText(lastLetter).width;

    const totalTextWidth = firstLetterWidth + middleLettersWidth + lastLetterWidth + 53;

    if (uploadedBgImage) {
      const imgWidth = uploadedBgImage.width;
      const imgHeight = uploadedBgImage.height;
      const sideLength = Math.min(imgWidth, imgHeight);
      const sx = (imgWidth - sideLength) / 2;
      const sy = (imgHeight - sideLength) / 2;

      ctx.drawImage(
        uploadedBgImage,
        sx, sy,
        sideLength, sideLength,
        0, 0,
        canvas.width, canvas.height
      );

      if (!isBgTransparent) {
        ctx.fillStyle = bgColor;
        ctx.globalAlpha = 0.7;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      ctx.globalAlpha = 1.0;
    } else if (!isBgTransparent) {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    ctx.fillStyle = textColor;
    let x = (canvas.width - totalTextWidth) / 2;
    const y = canvas.height / 2 + 32;

    ctx.font = `${fontsize1}px ${type1.style.fontFamily}`;
    ctx.fillText(firstLetter, x, y);

    x += firstLetterWidth + (firstLetterWidth * 0.1);
    if (middleLetters.length > 0) {
      ctx.font = `${fontsize2}px ${type2.style.fontFamily}`;
      ctx.fillText(middleLetters, x, y);
      x += middleLettersWidth;
    }

    ctx.font = `${fontsize3}px ${type3.style.fontFamily}`;
    ctx.fillText(lastLetter, x, y);

    setGeneratedImage(canvas.toDataURL('image/png'));
  };

  const downloadImage = () => {
    if (!canvasRef.current) return;

    const link = document.createElement('a');
    link.download = `${word.trim()}.png`;
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  useEffect(() => {
    generateImage();
  }, [word, textColor, bgColor, isDefaultTextColor, isBgTransparent, uploadedBgImage]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className=" w-full aspect-square">
        <canvas
          ref={canvasRef}
          className="hidden"
        />
        {generatedImage && (
          <img
            src={generatedImage}
            alt="Generated PFP"
            className="mx-auto max-w-full h-auto"
          />
        )}
      </div>
      <div className="space-y-2">
        <div className="space-y-4">
          <div>
            <Label htmlFor='content' className="font-bold text-[#ae6040]">
              Input:
            </Label>
            <Input
              id='content'
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder='Type your word here.'
              className=' bg-white rounded-md focus-visible:ring-[#ae6040] focus-visible:ring-offset-2 focus-visible:ring-2 focus-visible:outline-none'
            />
          </div>

          <div>
            <Label htmlFor='textColorInput' className="font-bold text-[#ae6040]">
              Text Color:
            </Label>
            <div
              className="flex items-center gap-4 p-2 bg-white rounded-md border border-gray-200">
              <input
                id='textColorInput'
                type="color"
                value={textColor}
                onChange={(e) => handleTextColorChange(e.target.value)}
                className="w-12 h-10 cursor-pointer"
              />
              <div className='flex items-center space-x-2'>
                <Checkbox
                  id='defaultTextColor'
                  checked={isDefaultTextColor}
                  onCheckedChange={(checked) => handleTextColorCheckboxChange(checked as boolean)} />
                <Label htmlFor='defaultTextColor' className='text-[#6B7280]'>Chromakopia Green</Label>
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor='bgColorInput' className="font-bold text-[#ae6040]">
              Background Color:
            </Label>
            <div className="flex items-center gap-4 p-2 bg-white rounded-md border border-gray-200">
              <input
                id='bgColorInput'
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-12 h-10 cursor-pointer"
              />
              <div className='flex items-center space-x-2'>
                <Checkbox
                  id='bgTransparent'
                  checked={isBgTransparent}
                  onCheckedChange={(checked) => setIsBgTransparent(checked as boolean)} />
                <Label htmlFor='bgTransparent' className='text-[#6B7280]'>Transparent Background</Label>
              </div>
            </div>
          </div>

          {/* <div>
            <Label htmlFor="bgImageInput">Background Image</Label>
            <Input
              id="bgImageInput"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-1"
            />
          </div> */}

          <div>
            <Label htmlFor='bgImageInput' className="font-bold text-[#ae6040]">
              Background Image:
            </Label>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center bg-white">
              <input
                id='bgImageInput'
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="block w-full text-sm
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-[#F8F8FC] file:text-[#ae6040]
                                    hover:file:bg-[#EFEDFD]"
              />
            </div>
          </div>

          <Button
            className="w-full bg-[#ae6040] hover:bg-[#bc694a] text-white py-3 rounded-lg font-medium"
            onClick={downloadImage}
          >
            Download Image
          </Button>


        </div>
      </div>
    </div>
  );
};

export default FontGenerator;