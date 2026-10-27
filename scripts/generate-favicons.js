const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const psScript = `
Add-Type -AssemblyName System.Drawing;
$srcPath = (Get-Item 'public/icon.png').FullName;
$srcImg = [System.Drawing.Image]::FromFile($srcPath);

function Resize-SquarePng($img, [int]$size, [string]$dest) {
    $bmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb);
    $g = [System.Drawing.Graphics]::FromImage($bmp);
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic;
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality;
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality;
    $g.Clear([System.Drawing.Color]::Transparent);

    $maxDim = [Math]::Max($img.Width, $img.Height);
    $scale = $size / $maxDim;
    $w = [int]($img.Width * $scale);
    $h = [int]($img.Height * $scale);
    $x = [int](($size - $w) / 2);
    $y = [int](($size - $h) / 2);

    $g.DrawImage($img, $x, $y, $w, $h);
    $g.Dispose();
    $bmp.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png);
    $bmp.Dispose();
}

Resize-SquarePng $srcImg 48 'public/favicon-48x48.png';
Resize-SquarePng $srcImg 32 'public/favicon-32x32.png';
Resize-SquarePng $srcImg 16 'public/favicon-16x16.png';
Resize-SquarePng $srcImg 192 'public/icon-192.png';
Resize-SquarePng $srcImg 512 'public/icon-512.png';
Resize-SquarePng $srcImg 180 'public/apple-touch-icon.png';
Resize-SquarePng $srcImg 48 'src/app/icon.png';
Resize-SquarePng $srcImg 180 'src/app/apple-icon.png';

$srcImg.Dispose();
Write-Host "Favicons generated successfully";
`;

fs.writeFileSync('scripts/generate-favicons.ps1', psScript);
console.log('Script written');
